import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, Output, TemplateRef, ViewChild,EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { SalesQuotationsService } from '../../../../app/views/app/customer-portal/sales-quotations/sales-quotations.service';

@Component({
  selector: 'app-add-item-invoice',
  templateUrl: './add-item-invoice.component.html'
})
export class AddItemInvoiceComponent implements OnInit {

  itemForm:FormGroup;
  modalRef: BsModalRef;
  rows:any;
  selection = new SelectionModel<any>(false,[]);
  SelectedItem?:any;
  @ViewChild('template', { static: true }) template: TemplateRef<any>;
  @ViewChild('table') table: any;
  @ViewChild('form') form: NgForm;
  itemsPerPage = 5;
  ColumnMode = ColumnMode;
  columns = [
    { prop: 'productID', name: 'Product ID' },
    { prop: 'productDescription', name: 'Product Description' },
  ];
  //temp = [...this.rows];
  selected =[];
  SelectionType = SelectionType;
  @Output() newItemEvent = new EventEmitter<any>();
  config = {
    backdrop: true,
    ignoreBackdropClick: true,
    class:'modal-lg'
  };
  temp=[];
  constructor(private fb:FormBuilder,private modalService: BsModalService,private salesQuotesService: SalesQuotationsService) { }

  ngOnInit() {
    this.salesQuotesService.getMaterial().subscribe((i) => {
      console.log("item of rfq",i)
      this.rows=i
      this.temp.push(this.rows);

    })
  }
  showModal(): void {
    this.modalRef = this.modalService.show(this.template,this.config);
  }
  Add(){
      console.log("new Item of RFQ",this.selected[0].productID);
      this.newItemEvent.emit(this.selected[0]);
      this.modalRef.hide();

  }
  onSelect({ selected }) {
    console.log('Select Event', selected, this.selected);
  }
  toggleExpandRow(row): void {
    this.table.rowDetail.toggleExpandRow(row);
  }
  searchvalue(item){
    console.log("search",item);
    if (item == "") {
      item = "*"
    } else {
      item = item
    }
    this.salesQuotesService.getMaterialSearch(item).subscribe((i) => {
      console.log("item of order",i)
      this.rows=i
    })
  }
}
