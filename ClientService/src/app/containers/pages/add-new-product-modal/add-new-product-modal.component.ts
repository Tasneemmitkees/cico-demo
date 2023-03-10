import { Component, TemplateRef,  ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-add-new-product-modal',
  templateUrl: './add-new-product-modal.component.html',
  styles: []
})
export class AddNewProductModalComponent  {
  modalRef: BsModalRef;
  config = {
    backdrop: true,
    ignoreBackdropClick: true,
    class: 'modal-right'
  };
  categories = [
    { label: 'Cakes', value: 'chocolate' },
    { label: 'Cupcakes', value: 'vanilla' },
    { label: 'Desserts', value: 'strawberry' }
  ];


  @ViewChild('template', { static: true }) template: TemplateRef<any>;
  @ViewChild('form') form: NgForm;
  constructor(private modalService: BsModalService) { }


  show(): void {
    this.modalRef = this.modalService.show(this.template, this.config);
  }
  onSubmit(): void{
    console.log(this.form);
  }

}
