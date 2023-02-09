import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutContainersModule } from 'src/app/containers/layout/layout.containers.module';
import { ComponentsChartModule } from 'src/app/components/charts/components.charts.module';

@NgModule({
  declarations: [	 AppComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    LayoutContainersModule,
    ComponentsChartModule,
  ]
})
export class AppModule { }

