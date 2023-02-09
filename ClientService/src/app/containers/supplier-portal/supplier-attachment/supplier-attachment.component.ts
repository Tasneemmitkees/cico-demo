import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Attachement } from 'src/app/data/SupplierPortal';
import { AddAttachmentComponent } from '../../supplier-modal/add-attachment/add-attachment.component';

@Component({
  selector: 'app-supplier-attachment',
  templateUrl: './supplier-attachment.component.html'
})
export class SupplierAttachmentComponent implements OnInit {

  data=generalData;
  modalRef: BsModalRef;

  @ViewChild('addAttachmentModalRef', { static: true }) addAttachmentModalRef:AddAttachmentComponent;
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
    this.addAttachmentModalRef.showModal();
  }
  addAttachment(attachement:any){
    this.data.push(attachement);
    console.log("parent",attachement);
  }
}
const generalData:Attachement[]=[
  {
    title:"doc1"
  },
  {
    title:"doc2"
  }
]
