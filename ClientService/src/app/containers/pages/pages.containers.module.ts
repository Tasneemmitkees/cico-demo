import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LightboxModule } from 'ngx-lightbox';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { ComponentsPagesModule } from '../../components/pages/components.pages.module';
import { ComponentsCardsModule } from '../../components/cards/components.cards.module';
import { ComponentsPlayerModule } from 'src/app/components/player/components.player.module';
import { LayoutContainersModule } from '../layout/layout.containers.module';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { RatingModule } from 'ngx-bootstrap/rating';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {ProfileGeneralComponent} from './profile-general/profile-general.component';
import {ProfileAddressComponent} from'./profile-address/profile-address.component';
import {ProfileContactComponent} from './profile-contact/profile-contact.component';
import {ProfileAttachmentComponent} from './profile-attachment/profile-attachment.component';
import {ProfilePaymentComponent} from './profile-payment/profile-payment.component';
import {CdkTableModule} from '@angular/cdk/table';
import {CompanyAddressComponent} from './company-address/company-address.component';
import {CompanyAttachmentComponent} from './company-attachment/company-attachment.component';
import {CompanyContactComponent} from './company-contact/company-contact.component';
import {CompanyGeneralComponent} from './company-general/company-general.component';
import {CompanyBankComponent} from './company-bank/company-bank.component';
import { ListPageHeaderComponent } from './list-page-header/list-page-header.component';
import {RfqDetailComponent} from './rfq-detail/rfq-detail.component';
import {CompanyAddressDetailComponent} from './company-address-detail/company-address-detail.component';
import {ProductCatalogDetailComponent} from './product-catalog-detail/product-catalog-detail.component';

import {SalesQuotationsDetailsComponent} from './sales-quotationsDetails/sales-quotationsDetails.component';
import {SalesOrderDetailsComponent} from './sales-orderDetails/sales-orderDetails.component';
import {CustomerInvoiceDetailsComponent} from './customer-invoice-details/customer-invoice-details.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


import { WjGridModule } from '@grapecity/wijmo.angular2.grid';
import { WjInputModule } from '@grapecity/wijmo.angular2.input';
import { MatTableModule } from '@angular/material/table';
import {MyComponentComponent} from './my-component/my-component.component';
import { MaterialExampleModule } from 'src/material.module';
import {AddNewModalContainersModule} from '../add-new-modal/add-new-modal.containers.module';
import { DropzoneModule } from 'ngx-dropzone-wrapper';

@NgModule({
  declarations: [
    ProfileGeneralComponent,
    ProfileAddressComponent,
    ProfileContactComponent,
    ProfileAttachmentComponent,
    ProfilePaymentComponent,
    CompanyAddressComponent,
    CompanyAttachmentComponent,
    CompanyContactComponent,
    CompanyGeneralComponent,
    CompanyBankComponent,
    SalesQuotationsDetailsComponent,
    SalesOrderDetailsComponent,
    CustomerInvoiceDetailsComponent,
    MyComponentComponent,
    ListPageHeaderComponent,
    RfqDetailComponent,
    CompanyAddressDetailComponent,
    ProductCatalogDetailComponent
  ],
  imports: [
    MaterialExampleModule,
    MatTableModule,
    CommonModule,
    SharedModule,
    CollapseModule,
    FormsModule,
    LayoutContainersModule,
    NgSelectModule,
    LightboxModule,
    ComponentsPagesModule,
    ComponentsCardsModule,
    ComponentsPlayerModule,
    RatingModule.forRoot(),
    TabsModule.forRoot(),
    AccordionModule.forRoot(),
    BsDropdownModule.forRoot(),
    CdkTableModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    WjGridModule,
    WjInputModule,
    AddNewModalContainersModule,
    DropzoneModule
  ],
  providers:[

  ],
  exports: [
    ProfileGeneralComponent,
    ProfileAddressComponent,
    ProfileContactComponent,
    ProfileAttachmentComponent,
    ProfilePaymentComponent,
    CompanyAddressComponent,
    CompanyAttachmentComponent,
    CompanyContactComponent,
    CompanyGeneralComponent,
    CompanyBankComponent,
    SalesQuotationsDetailsComponent,
    SalesOrderDetailsComponent,
    CustomerInvoiceDetailsComponent,
    MyComponentComponent,
    ListPageHeaderComponent,
    RfqDetailComponent,
    CompanyAddressDetailComponent,
    ProductCatalogDetailComponent
  ]
})
export class PagesContainersModule { }
