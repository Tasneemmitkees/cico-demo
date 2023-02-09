import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EinvoicesComponent} from'./einvoices.component';

const routes: Routes = [
  {
    path: 'envoices',
    component: EinvoicesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EinvoicesRoutingModule {}
