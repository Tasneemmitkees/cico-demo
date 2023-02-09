import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesQuotationsDetailsComponent } from 'src/app/containers/pages/sales-quotationsDetails/sales-quotationsDetails.component';
import { CustomerCompanyComponent } from './customer-company/customer-company.component';
import { CustomerIndividualComponent } from './customer-individual/customer-individual.component';
import { CustomerPortalComponent } from './customer-portal.component';
import { SalesQuotationsComponent } from './sales-quotations/sales-quotations.component';
import {SalesOrderComponent} from './sales-order/sales-order.component';
import {SalesOrderDetailsComponent} from '../../../containers/pages/sales-orderDetails/sales-orderDetails.component';
import {CustomerInvoiceComponent} from './customer-invoice/customer-invoice.component';
import { NewSalesOrderComponent } from './new-sales-order/new-sales-order.component';
import { CustomerInvoiceDetailsComponent } from 'src/app/containers/pages/customer-invoice-details/customer-invoice-details.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NewRfqComponent } from './new-rfq/new-rfq.component';
import { RfqListComponent } from './rfq-list/rfq-list.component';
import { RfqDetailComponent } from 'src/app/containers/pages/rfq-detail/rfq-detail.component';
import { CompanyAddressDetailComponent } from 'src/app/containers/pages/company-address-detail/company-address-detail.component';
import {ProductCatalogComponent} from './product-catalog/product-catalog.component';
import { ProductCatalogDetailComponent } from 'src/app/containers/pages/product-catalog-detail/product-catalog-detail.component';
import { BalanceConfirmationComponent } from './balance-confirmation/balance-confirmation.component';

const routes: Routes = [
  {
    path: '', component: CustomerPortalComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'individualcustomer', component: CustomerIndividualComponent,},
      { path: 'companycustomer', component: CustomerCompanyComponent,},
      {path:'salesquotations',component: SalesQuotationsComponent},
      {path:'salesQuotationDetail/:id',component:SalesQuotationsDetailsComponent},
      {path:'salesorder',component: SalesOrderComponent},
      {path:'salesorderDetail/:id',component:SalesOrderDetailsComponent},
      {path:'newsalesorder',component: NewSalesOrderComponent},
      {path:'customerinvoice',component: CustomerInvoiceComponent},
      {path:'customerinvoiceDetail/:id',component: CustomerInvoiceDetailsComponent},
      {path:'dashboard',component: HomePageComponent},
      {path:'newRfq',component: NewRfqComponent},
      {path:'rfqList',component: RfqListComponent},
      {path:'rfqDetail/:id',component: RfqDetailComponent},
      {path:'addressDetail/:id',component:CompanyAddressDetailComponent},
      {path:'productCatalog',component:ProductCatalogComponent},
      {path:'productCatalogDetail/:id',component:ProductCatalogDetailComponent},
      {path:'balanceConfirmation',component:BalanceConfirmationComponent}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerPortalRoutingModule {}
