import { ProductCatalogListComponent } from './product-catalog-list/product-catalog-list.component';
import { NewProductCatalogComponent } from './new-product-catalog/new-product-catalog.component';
import { ProductCatalogComponent } from './product-catalog.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCatalogRoutingModule } from './product-catalog.routing';
import { EllipsisModule } from 'ngx-ellipsis';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PagesContainersModule } from '../../../../containers/pages/pages.containers.module';
import { LayoutContainersModule } from '../../../../containers/layout/layout.containers.module';
import { FormsModule as FormsModuleAngular } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ArchwizardModule } from 'angular-archwizard';
import { MaterialExampleModule } from '../../../../../material.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import {SupplierModalContainersModule} from '../../../../containers/supplier-modal/supplier-modal.containers.module';


@NgModule({
  declarations: [ProductCatalogListComponent, NewProductCatalogComponent, ProductCatalogComponent],
  imports: [
    CommonModule,
    ProductCatalogRoutingModule,
    LayoutContainersModule,
    EllipsisModule,
    PaginationModule,
    PagesContainersModule,
    PaginationModule.forRoot(),
    FormsModuleAngular,
    TranslateModule,
    ArchwizardModule,
    MaterialExampleModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    SupplierModalContainersModule
  ]
})
export class ProductCatalogModule { }
