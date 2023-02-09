import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, Output, TemplateRef, ViewChild ,EventEmitter} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ColumnMode, DatatableComponent, SelectionType } from '@swimlane/ngx-datatable';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { OrderItem } from '../../../data/NewSalesOrder';
import { NewSalesOrderService } from 'src/app/views/app/customer-portal/new-sales-order/new-sales-order.service';

@Component({
  selector: 'app-add-item-order',
  templateUrl: './add-item-order.component.html'
})
export class AddItemOrderComponent implements OnInit {

  itemForm:FormGroup;
  modalRef: BsModalRef;
  rows:any;
  selection = new SelectionModel<any>(false,[]);
  SelectedItem?:any;
  @ViewChild('template', { static: true }) template: TemplateRef<any>;
  @ViewChild(DatatableComponent) table: DatatableComponent;
  itemsPerPage = 10;
  ColumnMode = ColumnMode;
  columns = [
    { prop: 'productID', name: 'Product ID' },
    { prop: 'productDescription', name: 'Product Description' },
    { prop: 'price', name: 'Price' },
  ];
  //temp = [...this.rows];
  selected =[];
  SelectionType = SelectionType;
  @Output() newItemOrder = new EventEmitter<any>();
  config = {
    backdrop: true,
    ignoreBackdropClick: true,
    class:'modal-lg'
  };
  constructor(private fb:FormBuilder,
              private modalService: BsModalService,
              private newSalesOrderService: NewSalesOrderService) { }

  ngOnInit() {
    this.newSalesOrderService.getMaterialWithPrice().subscribe((i) => {
      console.log("item of order",i)
      this.rows=i
    })
  }
  showModal(): void {
    this.modalRef = this.modalService.show(this.template,this.config);
  }
  Add():any{
    console.log("new Item of Order",this.selected[0].materialId,this.selected[0].price);

      this.newItemOrder.emit(this.selected);
      this.modalRef.hide();
  }
  onSelect({ selected }) {
    console.log('Select Event', selected, this.selected);
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }
  toggleExpandRow(row): void {
    this.table.rowDetail.toggleExpandRow(row);
  }
  search(item){
    // console.log("item")
    console.log(item)
    if (item == "") {
      item = "*"
    } else {
      item = item
    }
    this.newSalesOrderService.getMaterialWithPriceSearch(item).subscribe((i) => {
      console.log("item of order",i)
      this.rows=i
    });
  }
  // updateFilter(event): void {
  //   const val = event.target.value.toLowerCase().trim();
  //   const count = this.columns.length;
  //   const keys = Object.keys(this.temp[0]);
  //   const temp = this.temp.filter(item => {
  //     for (let i = 0; i < count; i++) {
  //       if ((item[keys[i]] && item[keys[i]].toString().toLowerCase().indexOf(val) !== -1) || !val) {
  //         return true;
  //       }
  //     }
  //   });
  //   this.rows = temp;
  //   this.table.offset = 0;
  // }

}
// const data:OrderItem[]= [
//   {
//     productID: 1,
//     productDescription: 'Active',
//     requestedQuantity:4,
//     unitOfMeasurment:3,
//     price: 2000 ,
//   },
//   {
//     productID: 2,
//     productDescription: 'Active',
//     requestedQuantity:4,
//     unitOfMeasurment:3,
//     price: 3000,
//   },
// ]
