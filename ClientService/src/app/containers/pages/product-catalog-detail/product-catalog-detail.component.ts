import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import  { IProduct } from '../../../data/products';

@Component({
  selector: 'app-product-catalog-detail',
  templateUrl: './product-catalog-detail.component.html',
})
export class ProductCatalogDetailComponent implements OnInit {

  modalRef: BsModalRef;
  config = {
    backdrop: true,
    ignoreBackdropClick: true,
    class: 'modal-right'
  };
  @ViewChild('template', { static: true }) template: TemplateRef<any>;
  productID:number;
  productPrice:string;
  productName:string;
  @Input() product:IProduct;

  constructor(private modalService: BsModalService,) { }

  ngOnInit() {
  }
  showModal(product): void {
    // console.log(product);
    this.productID = product.id;
    this.productPrice = product.date;
    this.productName = product.title;
    this.modalRef = this.modalService.show(this.template, this.config);
  }

}
