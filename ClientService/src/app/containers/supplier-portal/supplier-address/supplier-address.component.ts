import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Address } from 'src/app/data/SupplierPortal';
import { AddAddressComponent } from '../../supplier-modal/add-address/add-address.component';

@Component({
  selector: 'app-supplier-address',
  templateUrl: './supplier-address.component.html'
})
export class SupplierAddressComponent implements OnInit {

  data=generalData;
  modalRef: BsModalRef;
  @ViewChild('addAddressModalRef', { static: true }) addAddressModalRef:AddAddressComponent;
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }
  openDeleteModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }
  confirmDelete(rowIndex:number):void{
    this.data.splice(rowIndex,1);
    this.modalRef.hide();
  }
  cancelDelete(){
    this.modalRef.hide();
  }
  showAddNewModal(): void {
    this.addAddressModalRef.showModal();
  }
  addAddress(address:any){
    this.data.push(address);
    console.log("parent",address);
  }

}
const generalData:Address[]=[
  {
    city:"cairo",
    country:"egypt",
    description:"cairo,egypt"
  },{
    city:"alex",
    country:"egypt",
    description:"alex,egypt"
  }
  ]
