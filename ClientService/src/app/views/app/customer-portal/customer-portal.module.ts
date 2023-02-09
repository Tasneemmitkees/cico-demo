import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CustomerPortalComponent } from './customer-portal.component';
import { CustomerIndividualComponent } from './customer-individual/customer-individual.component';
import { CustomerCompanyComponent } from './customer-company/customer-company.component';
import { SalesQuotationsComponent } from './sales-quotations/sales-quotations.component';
import { SalesOrderComponent } from './sales-order/sales-order.component';
import { CustomerInvoiceComponent } from './customer-invoice/customer-invoice.component';
import { NewSalesOrderComponent } from './new-sales-order/new-sales-order.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NewRfqComponent } from './new-rfq/new-rfq.component';
import { RfqListComponent } from './rfq-list/rfq-list.component';
import {ProductCatalogComponent} from './product-catalog/product-catalog.component';
import {BalanceConfirmationComponent} from './balance-confirmation/balance-confirmation.component';

import { CustomerPortalRoutingModule } from './customer-portal.routing';
import { LayoutContainersModule } from 'src/app/containers/layout/layout.containers.module';
import { TranslateModule } from '@ngx-translate/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { PagesContainersModule } from '../../../containers/pages/pages.containers.module';
import { CompanyServiceService } from './customer-company/company-service.service';
import { SalesQuotationsService } from './sales-quotations/sales-quotations.service';
import { SalesOrderService } from './sales-order/sales-order.service';
import { CustomerInvoiceService } from './customer-invoice/customer-invoice.service';
import { NewSalesOrderService } from './new-sales-order/new-sales-order.service';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ArchwizardModule } from 'angular-archwizard';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { NgSelectModule } from '@ng-select/ng-select';
import { ComponentsChartModule } from '../../../components/charts/components.charts.module';
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
import { IndividualServiceService } from './customer-individual/individual-service.service';
import { ProductCatalogService } from 'src/app/views/app/customer-portal/product-catalog/product-catalog.service';
import { HomePageService } from 'src/app/views/app/customer-portal/home-page/home-page.service';
import { AddNewModalContainersModule } from '../../../containers/add-new-modal/add-new-modal.containers.module';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { MaterialExampleModule } from '../../../../material.module';
import { ContextMenuModule } from 'ngx-contextmenu';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { ModalModule } from 'ngx-bootstrap/modal';
import { RatingModule } from 'ngx-bootstrap/rating';

@NgModule({
  imports: [
    MatSliderModule,
    CommonModule,
    CustomerPortalRoutingModule,
    TranslateModule,
    TabsModule.forRoot(),
    LayoutContainersModule,
    BsDropdownModule.forRoot(),
    PagesContainersModule,
    NgxDatatableModule,
    CollapseModule,
    ArchwizardModule,
    FormsModule,
    ReactiveFormsModule,
    PaginationModule.forRoot(),
    DropzoneModule,
    NgSelectModule,
    ComponentsChartModule,
    MatTableModule,
    AddNewModalContainersModule,
    BsDatepickerModule.forRoot(),
    SimpleNotificationsModule.forRoot(),
    MaterialExampleModule,
    AccordionModule.forRoot(),
    ContextMenuModule.forRoot({
      useBootstrap4: true,
    }),
    ModalModule.forRoot(),
    RatingModule.forRoot(),
  ],

  providers: [
    CompanyServiceService,
    SalesQuotationsService,
    SalesOrderService,
    CustomerInvoiceService,
    NewSalesOrderService,
    IndividualServiceService,
    ProductCatalogService,
    HomePageService
  ],
  declarations: [
    CustomerPortalComponent,
    CustomerIndividualComponent,
    CustomerCompanyComponent,
    SalesQuotationsComponent,
    SalesOrderComponent,
    CustomerInvoiceComponent,
    NewSalesOrderComponent,
    HomePageComponent,
    NewRfqComponent,
    RfqListComponent,
    ProductCatalogComponent,
    BalanceConfirmationComponent
  ],
})
export class CustomerPortalModule {}
