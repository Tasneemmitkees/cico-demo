import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductCatalogDetailComponent } from 'src/app/containers/supplier-portal/product-catalog-detail/product-catalog-detail.component';
import { PurchaseOrderDetailComponent } from 'src/app/containers/supplier-portal/purchase-order-detail/purchase-order-detail.component';
import { RfqDetailComponent } from 'src/app/containers/supplier-portal/rfq-detail/rfq-detail.component';
import { BalanceConfirmationComponent } from './balance-confirmation/balance-confirmation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { RfqComponent } from './rfq/rfq.component';
import { SupplierPortalComponent } from './supplier-portal.component';
import { SupplierProfileComponent } from './supplier-profile/supplier-profile.component';

const routes: Routes = [
  {
    path: '',component: SupplierPortalComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {path:'dashboard',component: DashboardComponent},
      {path:'supplierProfile',component: SupplierProfileComponent},
      {path:'rfq',component:RfqComponent},
      {path:'purchaseOrder',component:PurchaseOrderComponent},
      {path:'invoice',loadChildren: () => import('./invoice/invoice.module').then(m => m.InvoiceModule)},
      {path:'balanceConfirmation',component:BalanceConfirmationComponent},
      { path: 'productCatalog', loadChildren: () => import('./product-catalog/product-catalog.module').then(m => m.ProductCatalogModule)},
      {path:'purchaseOrderDetail/:id',component:PurchaseOrderDetailComponent},
      {path:'rfqDetail/:id',component:RfqDetailComponent},
      {path:'productCatalogDetail/:id',component:ProductCatalogDetailComponent}
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupplierPortalRoutingModule {}
