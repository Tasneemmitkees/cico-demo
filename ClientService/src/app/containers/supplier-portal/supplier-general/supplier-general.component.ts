import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import {IdentificationNumbers} from '../../../data/SupplierPortal';
import { AddIdentificationComponent } from '../../supplier-modal/add-identification/add-identification.component';

@Component({
  selector: 'app-supplier-general',
  templateUrl: './supplier-general.component.html'
})
export class SupplierGeneralComponent implements OnInit {

  data=generalData;
  modalRef: BsModalRef;
  @ViewChild('addIdentificationModalRef', { static: true }) addIdentificationModalRef:AddIdentificationComponent ;
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
    this.addIdentificationModalRef.showModal();
  }
  addIdentfication(tax:any){
    // this.generalData.identificationNumbers.push(tax);
    // let resource = this.createtablerow();
    //     resource.patchValue({
    //        country: tax.country,
    //        numbertype: tax.numberType,
    //        numberID: tax.numberID
    //        });
    // this.identificationNumbersFormArray.push(resource);
    // (<FormArray>this.form.get('identificationNumbersFormArray')).controls.forEach(control=>{
    //   control.disable();
    // });
    this.data.push(tax);
    console.log("parent",tax);
  }

}
const generalData:IdentificationNumbers[]=[
{
  numberID:1,
  country:"egypt",
  numberType:"a"
},{
  numberID:2,
  country:"america",
  numberType:"a"
}
]
