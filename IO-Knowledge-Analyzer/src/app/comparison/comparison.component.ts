import {LiveAnnouncer} from '@angular/cdk/a11y';
import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {WebServiceService, Performance} from '../services/web-service.service';
import {map} from 'rxjs/operators';
import {MatDialog} from '@angular/material/dialog';
import {DialogComponent} from '../dialog/dialog.component';
import {MatPaginator} from '@angular/material/paginator';

let ELEMENT_DATA: Performance[] = [];

@Component({
  selector: 'app-comparison',
  templateUrl: './comparison.component.html',
  styleUrls: ['./comparison.component.css']
})
export class ComparisonComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['id','platform', 'cmd', 'api', 'transferSize', 'filePerProc', 'nodes', 'tasksPerNode'];
  dataSource = new MatTableDataSource<Performance>(ELEMENT_DATA);
  noData = this.dataSource.connect().pipe(map(data => data.length === 0));
  clickedRows = new Set<Performance>();
  showTab = false;

  constructor(private _liveAnnouncer: LiveAnnouncer, public ws: WebServiceService, public dialog: MatDialog) {

  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
    this.ws.multiSum = [];
    this.ws.getPerformances().then((p) =>{
      if(p){
       this.ws.performances.forEach(element => {
         ELEMENT_DATA.push(element);
       })
       this.showTab = true;
      //console.log(ELEMENT_DATA)
      }
     });
  }

  ngAfterViewInit() {
    this.dataSource.filterPredicate = function(data, filter: string): boolean {
      return data.cmd.toLowerCase().includes(filter) || data.api.toLowerCase().includes(filter) || data.id.toString() === filter;
    };
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
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
      this.view_update()
    }
  }

  view_update(){
    this.ws.multiSum = [];
   //console.log(this.clickedRows)
   this.ws.selectedIds = [];
    this.clickedRows.forEach(element => {
      this.ws.selectedIds.push(element.id)
    });
    this.ws.getMultiSummaries(this.ws.selectedIds, 'bwMeanMIB','performance_id').then(x=>{ });
    this.ws.getBoxSummaries(this.ws.selectedIds, 'bw','performance_id', "write").then(x=>{ });
  }

  
  openDialog() {
    this.view_update();
    const dialogRef = this.dialog.open(DialogComponent, {
      height: '850px',
      width: '850px',
    });

    dialogRef.afterClosed().subscribe(result => {
     //console.log(`Dialog result: ${result}`);
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
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



