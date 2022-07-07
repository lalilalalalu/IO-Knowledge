import { Component, OnInit } from '@angular/core';
import {WebServiceService, Performance} from '../services/web-service.service'

@Component({
  selector: 'app-config-generator',
  templateUrl: './config-generator.component.html',
  styleUrls: ['./config-generator.component.css']
})
export class ConfigGeneratorComponent implements OnInit {

  public performances: any;
  public selectedValue: Performance;
  public newPerformance: Performance;

  constructor(public ws: WebServiceService) {

   }

  ngOnInit(): void {
    this.ws.getPerformances().then(x=>{
        this.performances = this.ws.performances
    });
  }

  selectConfig(){
    this.newPerformance = JSON.parse(JSON.stringify(this.selectedValue));
  }

  empty(){
    for (let key in this.newPerformance) {
      //console.log(key, this.newPerformance[key])
      this.newPerformance[key] = null;
      // Use `key` and `value`
  }
  }

  generateConfig(){

  }

}
