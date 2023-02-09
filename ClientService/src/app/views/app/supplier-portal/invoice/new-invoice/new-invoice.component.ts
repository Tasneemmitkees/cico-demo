import { Component, OnInit, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AddItemInvoiceComponent } from 'src/app/containers/supplier-modal/add-item-invoice/add-item-invoice.component';

@Component({
  selector: 'app-new-invoice',
  templateUrl: './new-invoice.component.html'
})
export class NewInvoiceComponent implements OnInit {

  modalRef: BsModalRef;
  @ViewChild('addItemInvoiceModalRef', { static: true }) addItemInvoiceModalRef:AddItemInvoiceComponent;
  data=[];
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }
  showAddNewModal(): void {
    this.addItemInvoiceModalRef.showModal();
  }
  addItem(item:any){
    this.data.push(item);
    console.log("parent",item);
  }

}
