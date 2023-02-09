import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { IndividualCustomer } from 'src/app/data/individual-customer';
import salesOrderDetailData, {
  SalesOrderDetails,
  SalesOrderItems,
} from 'src/app/data/sales-order-detail';
import { NewSalesOrderService } from './new-sales-order.service';
import { Attachement, NewSalesOrder, OrderItem } from '../../../../data/NewSalesOrder';
import { AddNewAttachmentComponent } from 'src/app/containers/add-new-modal/add-new-attachment/add-new-attachment.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AddItemOrderComponent } from 'src/app/containers/add-new-modal/add-item-order/add-item-order.component';
import { NotificationsService, NotificationType } from 'angular2-notifications';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-new-sales-order',
  templateUrl: './new-sales-order.component.html',
})
export class NewSalesOrderComponent implements OnInit {
  @ViewChild('addNewAttachmentModalRef', { static: true }) addNewAttachmentModalRef: AddNewAttachmentComponent;
  @ViewChild('addNewItemModalRef', { static: true })
  addNewItemModalRef: AddItemOrderComponent;
  @ViewChild('form') form: NgForm;

  rows: SalesOrderDetails[] = salesOrderDetailData.slice();
  config = {
    url: 'https://httpbin.org/post',
    thumbnailWidth: 100,
    // tslint:disable-next-line: max-line-length
    previewTemplate:
      '<div class="dz-preview dz-file-preview mb-3"><div class="d-flex flex-row "><div class="p-0 w-30 position-relative"><div class="dz-error-mark"><span><i></i></span></div><div class="dz-success-mark"><span><i></i></span></div><div class="preview-container"><img data-dz-thumbnail class="img-thumbnail border-0" /><i class="simple-icon-doc preview-icon" ></i></div></div><div class="pl-3 pt-2 pr-2 pb-1 w-70 dz-details position-relative"><div><span data-dz-name></span></div><div class="text-primary text-extra-small" data-dz-size /><div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div><div class="dz-error-message"><span data-dz-errormessage></span></div></div></div><a href="#/" class="remove" data-dz-remove><i class="glyph-icon simple-icon-trash"></i></a></div>',
  };
  newSalesOrder: FormGroup;
  customer: IndividualCustomer;
  materials: SalesOrderItems;
  selectionMod = new SelectionModel(false, []);
  Selected?: any;
  public edit: boolean = true;

  simpleItems = [];

  modalRef: BsModalRef;
  itemList: OrderItem[] = [];
  editing = {};
  minDate: Date = new Date();
  date: Date = new Date();
  constructor(
    private fb: FormBuilder,
    private newSalesOrderService: NewSalesOrderService,
    private modalService: BsModalService,
    private notifications: NotificationsService,
    private translate: TranslateService) {
    this.minDate.setDate(this.minDate.getDate() + 2);
    this.date.setDate(this.date.getDate() + 2);
  }

  ngOnInit() {
    this.createForm();
    let user = JSON.parse(localStorage.getItem('user'));
    console.log(user);
    if (user.bydesignUserType == "individual") {
      this.newSalesOrderService.getIndividualCustomer(user.bydesignUser).subscribe((i) => {
        this.customer = i;
        console.log("individual",i);
        this.newSalesOrder.patchValue({
          name: `${this.customer.firstName} ${this.customer.lastName}`,
          address: this.customer.address[0].description.replace(/\/+$/, ''),
          currency: 'KWD',
        });
      });
    } else {
      this.newSalesOrderService.getCompanyCustomer(user.bydesignUser).subscribe((i) => {
        this.customer = i;
        console.log("Company",i);
        this.newSalesOrder.patchValue({
          name: `${this.customer.englishName}`,
          address: this.customer.address[0].description.replace(/\/+$/, ''),
          currency: 'KWD',
        });
      });

    }
    this.simpleItems = ['P1000'];
    console.log("customer name", user.username);

  }
  public selection: string;


  onSubmit() {
    if (this.itemList.length === 0) {
      this.notifications.create(this.translate.instant('alert.warning'),
        "Provide at least one item",
        NotificationType.Warn, { timeOut: 3000, showProgressBar: true }
      );
    }
    else if (this.itemList.length > 0) {
      if (this.newSalesOrder.valid) {
        console.log('Form Submitted!', this.newSalesOrder.value);
        console.log('Form Submitted!', this.itemList[0]);
        let user = JSON.parse(localStorage.getItem('user'));

        let itemsArr: any[] = [];
        this.itemList.forEach((i: any) => {
          //console.log("check",i.unitOfMeasurmentCode)
          //console.log("date",i.deliveryDate+"T00:00:00.000Z")/
          // console.log(itemsArr.indexOf(i));

          let temp: any = {
            // ProductID: i.productID.toString(),
            // ID:10,
            ItemProduct: {
              ProductID: i.productID.toString(),
            },
            ItemScheduleLine: [
              {
                Quantity: i.requestedQuantity.toString(),
                unitCode: i.unitOfMeasurment,
                StartDateTime: i.deliveryDate + 'T00:00:00.000Z', //"2022-10-10T00:00:00.000Z"
              },
            ],
          };
          itemsArr.push(temp);
        });

        let newOrder: NewSalesOrder = {
          externalReference: this.newSalesOrder.value.externalReference,
          salesUnitPartyID: user.salesOrgnaisation,
          distributionChannelCode: user.distributionChannel,
          buyerPartyID: user.bydesignUser,
          currencyCode: "KWD",
          items: itemsArr,
        };
        console.log(newOrder);
        this.newSalesOrderService.createSalesOrder(newOrder).subscribe((i) => {
          console.log(i);
        });
        this.notifications.create(this.translate.instant('alert.success'),
        "Order Added Sucessfully",
        NotificationType.Success, { timeOut: 3000, showProgressBar: true }
        );
      }
    }
  }
  createForm() {
    this.newSalesOrder = this.fb.group({
      description: new FormControl(''),
      externalReference: new FormControl(''),
      notes: new FormControl(''),
      name: new FormControl({ value: '', disabled: true }),
      address: new FormControl({ value: '', disabled: true }),
      items: this.fb.array([]),

      attachment: this.fb.array([]),
    });
  }
  CreateAttachmentTableRow(): FormGroup {
    return this.fb.group({
      title: new FormControl(''),
      attachmentDocument: new FormControl(''),
    });
  }

  CreateItemsTableRow(): FormGroup {
    return this.fb.group({
      productNumber: new FormControl(''),
      itemDescription: new FormControl(''),
      requestedQuantity: new FormControl(''),
      unitOfMeasurment: new FormControl(''),
      listPrice: new FormControl(''),
      deliveryDate: new FormControl(''),
      netValue: new FormControl(''),
    });
  }
  onOptionsSelected(value: string) {
    console.log('the selected value is ' + value);
  }
  get attachment(): FormArray {
    return this.newSalesOrder.get('attachment') as FormArray;
  }
  get items(): FormArray {
    return this.newSalesOrder.get('items') as FormArray;
  }

  onSelect(item: any): void {
    this.Selected = item;
  }
  selectRow(row: any) {
    this.selectionMod.toggle(row);
  }
  onUploadError(event): void {
    console.log(event);
  }

  onUploadSuccess(event): void {
    console.log(event);
  }
  // modal of attachment
  showAddNewModal(): void {
    this.addNewAttachmentModalRef.showModal();
  }
  onDeleteAttachmentRow(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }
  confirm(rowIndex: number): void {
    this.attachment.removeAt(rowIndex);
    this.modalRef.hide();
  }

  decline(): void {
    this.modalRef.hide();
  }
  //modal of add item in order
  showAddItemOrderModal(): void {
    this.addNewItemModalRef.showModal();
  }

  onDeleteItemsRow(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }
  deleteitem(rowIndex: number): void {
    this.itemList.splice(rowIndex, 1);
    this.itemList = [...this.itemList];
    this.modalRef.hide();
  }

  canceldelete(): void {
    this.modalRef.hide();
  }
  addId(newId: any) {
    console.log('item of order', newId);
    let item: OrderItem = {
      productID: newId[0].materialId,
      productDescription: newId[0].description,
      requestedQuantity: '1',
      unitOfMeasurment: newId[0].unitOfMeasurment,
      deliveryDate: this.formatDateOnly(this.date),
      price: newId[0].price,
      netPrice: newId[0].price,
    };
    this.itemList.push(item);
    // });
    // newId.forEach((x:any)=>{
    //   x.materialId,x.price
    // })
  }
  public formatDateOnly(date: Date) {
    let month: number = date.getMonth() + 1;
    return date.getDate() + '-' + month + '-' + date.getFullYear();
  }

  changeQty(item: any, index: any) {
    console.log(item);
    console.log(index);
    console.log(this.itemList);
    this.itemList[index].netPrice = item.requestedQuantity * item.price;
    // this.itemList = [...this.itemList]
  }
  getValue(value, item: OrderItem) {
    console.log(value);
    item.requestedQuantity = value
    console.log("value", item.requestedQuantity = value)
  }
  onSubimt() {
    console.log("form", this.form.value)
  }
  updateQuantityValue(event, cell, rowIndex) {
    console.log('inline editing rowIndex', rowIndex);
    this.editing[rowIndex + '-' + cell] = false;
    this.itemList[rowIndex][cell] = event.target.value;
    this.itemList = [...this.itemList];
    console.log('UPDATED!', this.itemList[rowIndex][cell]);
  }
  updateDeliveryDateValue(event: Date, cell, rowIndex) {
    console.log('inline editing rowIndex', rowIndex);
    this.editing[rowIndex + '-' + cell] = false;
    this.itemList[rowIndex][cell] = this.formatDateOnly(event);
    this.itemList = [...this.itemList];
    console.log('UPDATED!', this.itemList[rowIndex][cell]);
  }
  addAttachment(attachement:Attachement):void{
      let resource = this.CreateAttachmentTableRow();
      resource.patchValue({
         title: attachement.title,
         attachmentDocument: attachement.attachmentDoc
        });
      this.attachment.push(resource);
      this.attachment.controls.forEach(control=>{
        control.disable();
      });
  }

}
