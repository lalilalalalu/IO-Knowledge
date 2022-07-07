import {AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import {WebServiceService, Performance} from '../services/web-service.service';
import {MatTableDataSource} from '@angular/material/table';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {MatSort, Sort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

let ELEMENT_DATA: Performance[] = [];

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UploaderComponent implements AfterViewInit{

firstFormGroup: FormGroup;
secondFormGroup: FormGroup;
isEditable = false

selectedFile: File
displayedColumns: string[] = ['id','platform', 'cmd', 'api', 'transferSize', 'filePerProc', 'nodes', 'tasksPerNode'];
dataSource = new MatTableDataSource(ELEMENT_DATA);
clickedRows = new Set<Performance>();

constructor(private _liveAnnouncer: LiveAnnouncer, public ws: WebServiceService, private _formBuilder: FormBuilder){
  this.firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  this.secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
}

ngAfterViewInit() {


  this.dataSource.filterPredicate = function(data, filter: string): boolean {
    return data.cmd.toLowerCase().includes(filter) || data.api.toLowerCase().includes(filter) || data.id.toString() === filter;
  };
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
}

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
    let fileReader: FileReader = new FileReader();
    fileReader.readAsText(this.selectedFile, "UTF-8");
    fileReader.onload = () => {
      if (typeof fileReader.result === 'string') {
        console.log(JSON.parse(fileReader.result));
        this.ws.local_performances = JSON.parse(fileReader.result)
        this.ws.local_performances.forEach(element => {
          ELEMENT_DATA.push(element);
        });
      }
     }
     fileReader.onerror = (error) => {
      console.log(error);
    }

    console.log(this.selectedFile);
    console.log('content: ' + JSON.stringify(this.selectedFile));
  }

  onUpload() {
  }

    announceSortChange(sortState: Sort) {

      if (sortState.direction) {
        this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
      } else {
        this._liveAnnouncer.announce('Sorting cleared');
      }
    }

    addRow(row){
      if(this.clickedRows.has(row)){
        this.clickedRows.delete(row)
      }else {
        this.clickedRows.add(row)
      }
    }
  
}