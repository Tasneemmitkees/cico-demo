import { Component, ViewChild} from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AddProductItemComponent } from 'src/app/containers/supplier-modal/add-product-item/add-product-item.component';

@Component({
  selector: 'app-new-product-catalog',
  templateUrl: './new-product-catalog.component.html'
})
export class NewProductCatalogComponent {

  modalRef: BsModalRef;
  @ViewChild('addProductItemModalRef', { static: true }) addProductItemModalRef:AddProductItemComponent;
  data=[];
  constructor(private modalService: BsModalService) { }

  showAddNewModal(): void {
    this.addProductItemModalRef.showModal();
  }
  addItem(item:any){
    this.data.push(item);
    console.log("parent",item);
  }


}
