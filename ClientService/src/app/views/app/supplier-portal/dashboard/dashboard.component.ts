import { Component, OnInit } from '@angular/core';
import { ChartService } from 'src/app/components/charts/chart.service';
import { areaChartData, barChartData, doughnutChartData, pieChartData } from 'src/app/data/charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  chartDataConfig: ChartService;

  areaChartData = areaChartData;
  barChartData = barChartData;
  pieChartData = pieChartData;
  doughnutChartData = doughnutChartData;
  constructor(private chartService: ChartService) {
    this.chartDataConfig = this.chartService; }

  ngOnInit() {
  }

}
