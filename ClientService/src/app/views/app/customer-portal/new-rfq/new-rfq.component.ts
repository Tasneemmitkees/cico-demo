import { SelectionModel } from '@angular/cdk/collections';
import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { NotificationsService, NotificationType } from 'angular2-notifications';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AddItemRfqComponent } from 'src/app/containers/add-new-modal/add-item-rfq/add-item-rfq.component';
import { item, RFQ, rfqItem } from 'src/app/data/RFQ'
import { CompanyServiceService } from '../customer-company/company-service.service';
import { SalesQuotationsService } from '../sales-quotations/sales-quotations.service';

@Component({
  selector: 'app-new-rfq',
  templateUrl: './new-rfq.component.html'
})
export class NewRfqComponent implements OnInit {

  Selected?: any;
  selectionMod = new SelectionModel(false, []);
  rfqForm: FormGroup;
  @ViewChild('addNewItemModalRef', { static: true }) addNewItemModalRef: AddItemRfqComponent;
  @ViewChild('form') form: NgForm;

  test: rfqItem;
  itemList: rfqItem[] = [];
  count: number;
  editing = {};
  customerName: String;
  modalRef: BsModalRef;
  minDate: Date = new Date();
  constructor(
    private fb: FormBuilder,
    private salesQuotesService: SalesQuotationsService,
    private comapanyAccService: CompanyServiceService,
    private modalService: BsModalService,
    private notifications: NotificationsService,
    private translate: TranslateService) {
    this.count = 10;
    this.minDate.setDate(this.minDate.getDate() + 2);
  }

  ngOnInit() {
    this.createForm();
    // console.log( "test",this.test=this.addNewItemModalRef.onSubmit());
    let user = JSON.parse(localStorage.getItem('user'));
    this.customerName = user.username;
    // this.comapanyAccService.getCompanyCustomer(user.bydesignUser).subscribe((i)=>{
    //   // this.rfqForm.patchValue({
    //     console.log(i);

    //     this.test2=i.englishName;
    //   // })

    // })

  }
  createForm() {
    this.rfqForm = this.fb.group({
      customerName: new FormControl({ value: '', disabled: true }),
      description: new FormControl(''),
      externalReference: new FormControl(''),
      // items:this.fb.array(this.itemList)
    });
  }
  showAddNewModal(): void {
    this.addNewItemModalRef.showModal();
  }

  onSubmit():void {
    let user = JSON.parse(localStorage.getItem('user'));
    if (this.itemList.length === 0) {
      this.notifications.create(this.translate.instant('alert.warning'),
        "Provide at least one item",
        NotificationType.Warn, { timeOut: 3000, showProgressBar: true });
    }
    else if (this.itemList.length > 0) {
      if (this.rfqForm.valid) {

        let itemsArr: item[] = []
        this.itemList.forEach((i: rfqItem) => {
          //console.log("check",i.unitOfMeasurmentCode)
          //console.log("date",i.deliveryDate+"T00:00:00.000Z")
          let temp: item = {
            ProductID: i.productID.toString(),
            ItemScheduleLine:
              [
                {
                  Quantity: i.quantity.toString(),
                  unitCode: i.unitOfMeasurmentCode,
                  // StartDateTime: i.deliveryDate + "T00:00:00.000Z"//"2022-10-10T00:00:00.000Z"  //TODO
                }
              ]
          }
          itemsArr.push(temp)
        })
        //console.log('new rfq',itemsArr)
        console.log('user', user)
        let rfq: RFQ = {
          externalReference: this.rfqForm.value.externalReference,
          distributionChannelCode: user.distributionChannel,
          description: this.rfqForm.value.description,
          currencyCode: "KWD",
          salesUnitPartyID: user.salesOrgnaisation,//"S1330",
          buyerPartyID: user.bydesignUser,        //"1",
          items: itemsArr
          // [
          //   {
          //     //ID: "10",
          //     //ExternalItemID: "E-10",
          //     //ProcessingTypeCode: "AGN",
          //     ProductID: "BCC0001",
          //     ItemScheduleLine:
          //     [
          //       {
          //         Quantity: "2",
          //         unitCode: "Box"
          //       }
          //     ]
          //   }
          // ]
        }
        console.log('new rfq', rfq)
        //console.log("New Rfq" ,this.rfqForm.value, this.itemList,rfq);
        this.salesQuotesService.createSalesQoute(rfq).subscribe();

        this.notifications.create(this.translate.instant('alert.success'),
        "RFQ Added Sucessfully",
        NotificationType.Success, { timeOut: 3000, showProgressBar: true }
        );
      }
    }
  }
  addId(newId: number) {
    //this.itemList.push(newId)
    let date: Date = new Date();
    date.setDate(date.getDate() + 2);
    console.log("date", date)
    this.salesQuotesService.getMaterialDetails(newId.toString()).subscribe((i: any) => {
      console.log(i)
      let item: rfqItem = {
        id: this.count,
        productID: newId.toString(),
        description: i.description,
        quantity: 1,
        unitOfMeasurment: i.unitOfMeasurement,
        deliveryDate: this.formatDateOnly(date),//date.toString(),
        unitOfMeasurmentCode: i.unitOfMeasurementCode
      }
      this.itemList.push(item);
      this.count += 10
    })
  }
  public formatDateOnly(date: Date) {
    let month: number = date.getMonth() + 1;
    return date.getDate() + '-' + month + '-' + date.getFullYear();
  };
  updateQuantityValue(event, cell, rowIndex) {
    console.log('inline editing rowIndex', rowIndex);
    this.editing[rowIndex + '-' + cell] = false;
    this.itemList[rowIndex][cell] = event.target.value;
    this.itemList = [...this.itemList];
    console.log('UPDATED!', this.itemList[rowIndex][cell]);
  }
  updateDeliveryDateValue(event, cell, rowIndex) {
    console.log('inline editing rowIndex', rowIndex, event);
    this.editing[rowIndex + '-' + cell] = false;
    this.itemList[rowIndex][cell] = this.formatDateOnly(event);
    this.itemList = [...this.itemList];
    console.log('UPDATED!', this.itemList[rowIndex][cell]);
  }
  openDeleteModel(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }
  confirmRemoveItem(id: number): void {
    this.itemList = this.itemList.filter((item) => item.id !== id);
    this.modalRef.hide();
  }
  cancelDeleteItem(): void {
    this.modalRef.hide();
  }

}
