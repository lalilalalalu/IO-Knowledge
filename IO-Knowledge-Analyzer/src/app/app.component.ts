import { Component } from '@angular/core';
import { ConnectableObservable } from 'rxjs';
import {WebServiceService} from './services/web-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ior-gui';
  showNav = true;

  constructor(public ws: WebServiceService){}
}
