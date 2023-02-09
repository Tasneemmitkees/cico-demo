import { NgModule } from '@angular/core';
import { AreaChartComponent } from './area-chart/area-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PolarChartComponent } from './polar-chart/polar-chart.component';
import { ScatterChartComponent } from './scatter-chart/scatter-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { SmallLineChartComponent } from './small-line-chart/small-line-chart.component';
import { CommonModule } from '@angular/common';
import { ChartService } from './chart.service';

@NgModule({
  declarations: [
    AreaChartComponent,
    LineChartComponent,
    PolarChartComponent,
    ScatterChartComponent,
    BarChartComponent,
    RadarChartComponent,
    PieChartComponent,
    DoughnutChartComponent,
    SmallLineChartComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [ChartService],
  exports: [
    AreaChartComponent,
    LineChartComponent,
    PolarChartComponent,
    ScatterChartComponent,
    BarChartComponent,
    RadarChartComponent,
    PieChartComponent,
    DoughnutChartComponent,
    SmallLineChartComponent
  ]
})

export class ComponentsChartModule { }
