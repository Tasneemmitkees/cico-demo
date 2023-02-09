import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuppliernetworkComponent } from './supplier-network.component';
import { SuppliernetworkRoutingModule } from './supplier-network.routing';
import { LayoutContainersModule } from '../../../containers/layout/layout.containers.module';
import { MaterialExampleModule } from '../../../../material.module';
import { PagesContainersModule } from '../../../containers/pages/pages.containers.module';


@NgModule({
  imports: [
    CommonModule,
    LayoutContainersModule,
    SuppliernetworkRoutingModule,
    MaterialExampleModule,
    PagesContainersModule
  ],
  declarations: [SuppliernetworkComponent]
})
export class SuppliernetworkCModule { }
