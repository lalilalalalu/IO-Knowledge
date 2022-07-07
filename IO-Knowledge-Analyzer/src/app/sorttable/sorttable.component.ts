
import {OnInit, Component, ViewChild} from '@angular/core';
import {WebServiceService, Performance} from '../services/web-service.service';

/* const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
]; */

let ELEMENT_DATA: Performance[] = [];

@Component({
  selector: 'app-sorttable',
  templateUrl: './sorttable.component.html',
  styleUrls: ['./sorttable.component.css']
})
export class SorttableComponent implements OnInit {

  selectedFile: File

  ngOnInit(): void {
    
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
    let fileReader: FileReader = new FileReader();
    fileReader.readAsText(this.selectedFile, "UTF-8");
    fileReader.onload = () => {
      if (typeof fileReader.result === 'string') {
        console.log(JSON.parse(fileReader.result));
      }
     }
     fileReader.onerror = (error) => {
      console.log(error);
    }

    console.log(this.selectedFile);
    console.log('content: ' + JSON.stringify(this.selectedFile));
  }

  onUpload() {
  // upload code goes here
  }
}