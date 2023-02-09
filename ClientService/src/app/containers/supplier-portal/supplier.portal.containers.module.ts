import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LightboxModule } from 'ngx-lightbox';
import { SharedModule } from '../../shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { ComponentsPagesModule } from '../../components/pages/components.pages.module';
import { ComponentsCardsModule } from '../../components/cards/components.cards.module';
import { LayoutContainersModule } from '../layout/layout.containers.module';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { RatingModule } from 'ngx-bootstrap/rating';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


import { WjGridModule } from '@grapecity/wijmo.angular2.grid';
import { WjInputModule } from '@grapecity/wijmo.angular2.input';
import { MaterialExampleModule } from '../../../material.module';
import {AddNewModalContainersModule} from '../add-new-modal/add-new-modal.containers.module';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { SupplierGeneralComponent } from './supplier-general/supplier-general.component';
import {SupplierAddressComponent} from './supplier-address/supplier-address.component';
import {SupplierContactComponent} from './supplier-contact/supplier-contact.component';
import {SupplierBankComponent} from './supplier-bank/supplier-bank.component';
import {SupplierAttachmentComponent} from './supplier-attachment/supplier-attachment.component';
import {RfqDetailComponent} from './rfq-detail/rfq-detail.component';
import {PurchaseOrderDetailComponent} from './purchase-order-detail/purchase-order-detail.component';
import {InvoiceDetailComponent} from './invoice-detail/invoice-detail.component';
import {ProductCatalogDetailComponent} from './product-catalog-detail/product-catalog-detail.component';
import {SupplierModalContainersModule} from '../supplier-modal/supplier-modal.containers.module'
@NgModule({
  declarations: [
    SupplierGeneralComponent,
    SupplierAddressComponent,
    SupplierContactComponent,
    SupplierBankComponent,
    SupplierAttachmentComponent,
    RfqDetailComponent,
    PurchaseOrderDetailComponent,
    InvoiceDetailComponent,
    ProductCatalogDetailComponent
  ],
  imports: [
    MaterialExampleModule,
    CommonModule,
    SharedModule,
    CollapseModule,
    FormsModule,
    LayoutContainersModule,
    NgSelectModule,
    LightboxModule,
    ComponentsPagesModule,
    ComponentsCardsModule,
    RatingModule.forRoot(),
    TabsModule.forRoot(),
    AccordionModule.forRoot(),
    BsDropdownModule.forRoot(),
    ReactiveFormsModule,
    NgxDatatableModule,
    WjGridModule,
    WjInputModule,
    AddNewModalContainersModule,
    DropzoneModule,
    SupplierModalContainersModule
  ],
  providers:[

  ],
  exports: [
    SupplierGeneralComponent,
    SupplierAddressComponent,
    SupplierContactComponent,
    SupplierBankComponent,
    SupplierAttachmentComponent,
    RfqDetailComponent,
    PurchaseOrderDetailComponent,
    InvoiceDetailComponent,
    ProductCatalogDetailComponent
  ]
})
export class SupplierPortalContainersModule { }
