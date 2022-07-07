import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import {WebServiceService} from '../services/web-service.service';

@Component({
  selector: 'app-demo-chart',
  templateUrl: './demo-chart.component.html',
  styleUrls: ['./demo-chart.component.css']
})
export class DemoChartComponent implements OnInit {
  updateFlag = false;
  isHighcharts = typeof Highcharts === 'object';
  Highcharts: typeof Highcharts = Highcharts;
  oneToOneFlag: boolean = true; // optional boolean, defaults to false

  data = [1, 2, 3, 4];

  series = [];

  chartOptions: Highcharts.Options = {
    chart: {
      type: 'boxplot'
    },
    series: [
      {
        type: 'line',
        data: this.data,
      },
    ],
  };
  constructor(public ws: WebServiceService) {
    this.ws.multi;
  }
  ngOnInit(): void {
  }
  
  test(){
    this.chartOptions.title = {
      text: 'updated',
    };
    // @ts-ignore
    this.chartOptions.series.push({
      type: 'line',
      data: [5,6,7,8],
    });
    console.log(this.chartOptions)
    this.updateFlag = true;
  }

}
