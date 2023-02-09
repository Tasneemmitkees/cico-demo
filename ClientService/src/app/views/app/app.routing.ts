import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {EinvoicesComponent} from './einvoices/einvoices.component';
import {HrComponent} from './hr/hr.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'customerportal/dashboard' },
      {
        path: 'customerportal',
        loadChildren: () =>
          import('./customer-portal/customer-portal.module').then(
            (m) => m.CustomerPortalModule
          ),
      },
      { path: 'einvoices', component: EinvoicesComponent },
      { path: 'suppliernetwork',loadChildren:()=>import('./supplier-network/supplier-network.module').
      then((m)=>m.SuppliernetworkCModule) },
      { path: 'supplierportal',  loadChildren: () =>
      import('./supplier-portal/supplier-portal.module').then(
        (m) => m.SupplierPortalModule
      ),},
      { path: 'hr', component: HrComponent },
      { path: 'configuration',
       loadChildren:()=>
      import('./configuration/configuration.module').then(
        (m)=>m.ConfigurationModule
      )},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
