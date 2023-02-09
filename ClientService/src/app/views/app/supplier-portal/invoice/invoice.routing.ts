import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoiceDetailComponent } from 'src/app/containers/supplier-portal/invoice-detail/invoice-detail.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { InvoiceComponent } from './invoice.component';
import { NewInvoiceComponent } from './new-invoice/new-invoice.component';

const routes: Routes = [
  {
    path: '', component: InvoiceComponent,
    children: [
      { path: '', redirectTo: 'invoiceList', pathMatch: 'full' },
      { path: 'invoiceList', component: InvoiceListComponent },
      { path: 'newInvoice', component: NewInvoiceComponent },
      { path: 'invoiceDetail/:id', component: InvoiceDetailComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceRoutingModule { }
