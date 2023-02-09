import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SuppliernetworkComponent} from'./supplier-network.component';

const routes: Routes = [
  {
    path: '',
    component: SuppliernetworkComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuppliernetworkRoutingModule {}
