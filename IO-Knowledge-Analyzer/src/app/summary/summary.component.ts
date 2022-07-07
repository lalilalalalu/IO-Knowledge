import { Component, OnInit } from '@angular/core';
import {WebServiceService, Performance} from '../services/web-service.service'
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  public performances: any;
  public summaries: any;
  public results: any;
  public selectedValue: Performance;
  public selectedSummary: any;
  public selectedFilesystem: any;

  summariesP = false;
  performaceCtrl = new FormControl();
  //displayedColumns: string[] = [];
  displayedColumns: string[] = ["blockKiB","bwMiB","closeTime","iops","latency","openTime", "totalTime", "wrRdTime", "xferKiB"];
  public current_summary_id: number =0;

  multi: any[];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Repetitions';
  yAxisLabel: string = 'Throughput [MiB]';
  timeline: boolean = true;
  
  constructor(public ws: WebServiceService) {
    let obj = this.ws.multi;
    Object.assign(this, { obj });
   }

  ngOnInit(): void {
    this.ws.getPerformances().then(()=>{
      this.performances = this.ws.performances;
     });
     let obj = this.ws.multi;
     Object.assign(this, { obj });
  }

  getSummary(){
    this.ws.getSummaries(this.selectedValue.id).then(()=>{
     //console.log( this.selectedValue)
      this.summaries = this.ws.summaries;
     //console.log(this.summaries)
      this.summariesP = true;
      this.ws.getFilesystem(this.selectedValue.id).then((x)=>{
        this.selectedFilesystem = x;
        this.selectedFilesystem = JSON.parse(this.selectedFilesystem[0].settings)
       //console.log("fs: ", this.selectedFilesystem)
      })
    });
  }
/*
  showResults(summary_id: number){
    this.ws.getResults(summary_id).then(()=>{
      this.results = this.ws.results;
     //console.log(this.results);
      this.current_summary_id =summary_id;
      // this.buildTable();
      });
  }
*/
  buildTable(){
    let r = this.results[0];
    for (const key in r){
      this.displayedColumns.push(key)
    }
   //console.log(this.displayedColumns)
   
  }



  onSelect(data): void {
   //console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
   //console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
   //console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

}

