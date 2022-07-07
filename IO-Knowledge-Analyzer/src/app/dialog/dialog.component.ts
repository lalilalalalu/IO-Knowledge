import { Component, OnInit } from '@angular/core';
import {WebServiceService, Performance} from '../services/web-service.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  selectedR = 'bwMeanMIB';
  selectedC = 'performance_id';
  optionsR = ['bwMaxMIB', 'bwMinMIB', 'bwMeanMIB', 'bwStdMIB', 'OPsMax', 'OPsMin', 'OPsMean', 'OPsSD', 'MeanTime', 'xsizeMiB']
  optionsC = ['performance_id', 'API', 'segmentCount', 'blockSize', 'transferSize', 'numTasks', 'tasksPerNode', 'filePerProc']
  constructor(public ws: WebServiceService) { }

  ngOnInit(): void {
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
  update(){
    this.ws.multiSum = [];
     this.ws.getMultiSummaries(this.ws.selectedIds, this.selectedR, this.selectedC).then(x=>{ });
  }


}
