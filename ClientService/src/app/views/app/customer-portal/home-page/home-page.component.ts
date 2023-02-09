import { Component, OnInit } from '@angular/core';
import { ChartService } from '../../../../components/charts/chart.service';
import {
  areaChartData,
  barChartData,
  pieChartData,
  doughnutChartData,
} from '../../../../data/charts';
import { HomePageService } from './home-page.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnInit {
  chartDataConfig: ChartService;

  areaChartData = areaChartData;
  barChartData = barChartData;
  pieChartData = pieChartData;
  doughnutChartData = doughnutChartData;

  constructor(
    private chartService: ChartService,
    private homePageService: HomePageService
  ) {
    this.chartDataConfig = this.chartService;
    // console.log(this.chartDataConfig);
    // console.log(this.barChartData);
  }

  ngOnInit() {
    let user = JSON.parse(localStorage.getItem('user'));
    let BYD = JSON.parse(localStorage.getItem('BYD'));

    // let BYD = {
    //   URL: 'my357580',
    //   username: '_GETTOKEN01-',
    //   password: 'Number12',
    // };
    this.homePageService.getSalesOrderVolume(user.uuid, BYD).subscribe((i) => {
      console.log(i);
      let months = []
      let netvalues = []
      i.forEach(ele => {
        months.push(ele.C_ItmPstYrMnth)
        netvalues.push(ele.K_ItvNetAmtRc)
      });
      this.barChartData.labels.push(...months);
      this.barChartData.datasets[0].data.push(...netvalues);
      // let x = ['January', 'February', 'March', 'April', 'May', 'June'];
      // let y = [456, 479, 324, 890, 702, 600];
      // this.barChartData.labels.push(...x);
      // this.barChartData.datasets[0].data.push(...y);
      this.homePageService.getInvoicesVolume(user.uuid, BYD).subscribe((i) => {
        console.log(i);
        let months = []
        let invoices = []
        i.forEach(ele => {
          months.push(ele.C_ItmPstYrMnth)
          invoices.push(ele.K_IavInvAmtRc)
        });
        this.areaChartData.labels.push(...months);
        this.areaChartData.datasets[0].data.push(...invoices);

      });
    });
    // console.log(this.barChartData);
  }
}
