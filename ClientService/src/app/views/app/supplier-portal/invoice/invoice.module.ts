import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { NewInvoiceComponent } from './new-invoice/new-invoice.component';
import { InvoiceComponent } from './invoice.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceRoutingModule } from './invoice.routing';
import { LayoutContainersModule } from '../../../../containers/layout/layout.containers.module';
import { MaterialExampleModule } from '../../../../../material.module';
import { PagesContainersModule } from '../../../../containers/pages/pages.containers.module';
import { ArchwizardModule } from 'angular-archwizard';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule as FormsModuleAngular } from '@angular/forms';
import {SupplierModalContainersModule} from '../../../../containers/supplier-modal/supplier-modal.containers.module';
@NgModule({
  declarations: [InvoiceListComponent, NewInvoiceComponent, InvoiceComponent],
  imports: [
    CommonModule,
    InvoiceRoutingModule,
    LayoutContainersModule,
    MaterialExampleModule,
    PagesContainersModule,
    ArchwizardModule,
    TranslateModule,
    FormsModuleAngular,
    SupplierModalContainersModule
  ]
})
export class InvoiceModule { }
