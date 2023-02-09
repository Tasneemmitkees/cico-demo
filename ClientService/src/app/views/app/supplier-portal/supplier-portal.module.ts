import { NgModule } from '@angular/core';
import { SupplierPortalComponent } from './supplier-portal.component';
import { SupplierPortalRoutingModule } from './supplier-portal.routing';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../app/shared/shared.module';
import { LayoutContainersModule } from '../../../containers/layout/layout.containers.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {SupplierProfileComponent} from './supplier-profile/supplier-profile.component';
import {RfqComponent} from './rfq/rfq.component';
import {PurchaseOrderComponent} from './purchase-order/purchase-order.component';
import {BalanceConfirmationComponent} from './balance-confirmation/balance-confirmation.component';
import { TranslateModule } from '@ngx-translate/core';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PagesContainersModule } from 'src/app/containers/pages/pages.containers.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ArchwizardModule } from 'angular-archwizard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { NgSelectModule } from '@ng-select/ng-select';
import { ComponentsChartModule } from 'src/app/components/charts/components.charts.module';
import { MatTableModule } from '@angular/material/table';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { MaterialExampleModule } from 'src/material.module';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { ContextMenuModule } from 'ngx-contextmenu';
import { RatingModule } from 'ngx-bootstrap/rating';
import { ModalModule } from 'ngx-bootstrap/modal';
import {SupplierPortalContainersModule} from '../../../containers/supplier-portal/supplier.portal.containers.module';
@NgModule({
  imports: [
    SupplierPortalContainersModule,
    CommonModule,
    SupplierPortalRoutingModule,
    LayoutContainersModule,
    SharedModule,
    TranslateModule,
    TabsModule.forRoot(),
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
  declarations: [
    SupplierPortalComponent,
    DashboardComponent,
    SupplierProfileComponent,
    RfqComponent,
    PurchaseOrderComponent,
    BalanceConfirmationComponent
  ],

})
export class SupplierPortalModule { }
