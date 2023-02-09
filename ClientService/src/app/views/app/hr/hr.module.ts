import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HrComponent } from './hr.component';
import { HrRoutingModule } from './hr.routing';
import { MatTableModule } from '@angular/material/table';
import {MaterialExampleModule} from '../../../../material.module';
import {MatNativeDateModule} from '@angular/material/core';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [HrComponent],
  imports: [
    MatNativeDateModule
    ,MatSliderModule,
    MaterialExampleModule,
    CommonModule,
    HrRoutingModule,
    MatTableModule
  ],
  exports:[
    MatNativeDateModule
    ,MatSliderModule,
  ]
})
export class HrModule { }
