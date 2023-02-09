import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {EinvoicesComponent} from'./einvoices.component';
import {EinvoicesRoutingModule} from'./einvoices.routing';
import {LayoutContainersModule} from '../../../containers/layout/layout.containers.module';

@NgModule({
  declarations: [EinvoicesComponent],
  imports: [
    EinvoicesRoutingModule,
    CommonModule,
    LayoutContainersModule
  ]
})
export class EinvoicesModule { }
