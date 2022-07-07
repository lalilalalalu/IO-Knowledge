import { Component, OnInit } from '@angular/core';
import {WebServiceService} from '../services/web-service.service'; 

@Component({
  selector: 'app-io500',
  templateUrl: './io500.component.html',
  styleUrls: ['./io500.component.css']
})
export class Io500Component implements OnInit {

  public selectedValue: any;
  public io500: any;
  public selectedTestCases: any;
  public selectedTestCaseOptions: any;
  public selectedTestCasesResults: any;
  displayedColumns: string[] = ["blockKiB","bwMiB","closeTime","iops","latency","openTime", "totalTime", "wrRdTime", "xferKiB"];

  constructor(public ws: WebServiceService) { 
    
  }

  ngOnInit(): void {
    this.ws.getIO500().then(x =>{
      this.io500 = x;
      console.log(this.io500)
    });
  }

  selectIO500(){
    console.log(this.selectedValue)
    this.ws.getIO500_testcases(this.selectedValue.run_id).then(x=>{
      this.selectedTestCases = x;
      console.log(this.selectedTestCases)
      this.ws.getIO500_results(this.selectedValue.run_id).then(res => {
        console.log("hi",res)
        this.selectedTestCasesResults = res;
        this.ws.getIO500_options (this.selectedValue.run_id).then(op =>{
          this.selectedTestCaseOptions = op;
          console.log(op)
      })
      });

    })
  }

}
