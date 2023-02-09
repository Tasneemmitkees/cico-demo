import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductCatalogListComponent } from './product-catalog-list/product-catalog-list.component';
import { ProductCatalogComponent } from './product-catalog.component';
import { NewProductCatalogComponent } from './new-product-catalog/new-product-catalog.component';

const routes: Routes = [
  {
    path: '', component: ProductCatalogComponent,
    children: [
      { path: '', redirectTo: 'productCatalogList', pathMatch: 'full' },
      { path: 'productCatalogList', component: ProductCatalogListComponent },
      { path: 'newProductCatalog', component: NewProductCatalogComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductCatalogRoutingModule { }
