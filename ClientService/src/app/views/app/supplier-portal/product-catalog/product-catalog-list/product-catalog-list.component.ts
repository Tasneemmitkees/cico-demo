import { Component, ViewChild } from '@angular/core';
import { ProductCatalog } from 'src/app/data/SupplierPortal';

const ELEMENT_DATA: ProductCatalog[] = [
  {id: 1, validTo: '22-10-2022', validFrom:"3-10-2022", description: 'one'},
  {id: 2, validTo: '24-10-2022', validFrom:"2-10-2022", description: 'two'},
];
@Component({
  selector: 'app-product-catalog-list',
  templateUrl: './product-catalog-list.component.html'
})
export class ProductCatalogListComponent {

  constructor() {
   }
   displayedColumns: string[] = ['id', 'validTo', 'validFrom', 'description'];
  dataSource = ELEMENT_DATA;

  searchKeyUp(event): void {
    const val = event.target.value.toLowerCase().trim();
  }



}
