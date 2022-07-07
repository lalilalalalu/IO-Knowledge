import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HttpClientModule } from '@angular/common/http';
import { SummaryComponent } from './summary/summary.component';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './header/header.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { ComparisonComponent } from './comparison/comparison.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';
import { DemoChartComponent } from './demo-chart/demo-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import { UploaderComponent } from './uploader/uploader.component';
import {MatSortModule} from '@angular/material/sort';
import { SorttableComponent } from './sorttable/sorttable.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ConfigGeneratorComponent } from './config-generator/config-generator.component';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { HighchartsChartModule } from 'highcharts-angular';
import { Io500Component } from './io500/io500.component';


@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    HeaderComponent,
    ComparisonComponent,
    DemoChartComponent,
    UploaderComponent,
    SorttableComponent,
    DialogComponent,
    ConfigGeneratorComponent,
    Io500Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    HttpClientModule,
    MatListModule,
    MatCardModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatGridListModule,
    MatTableModule,
    MatIconModule,
    MatMenuModule,
    MatTabsModule,
    NgxChartsModule,
    MatInputModule,
    MatExpansionModule,
    MatSortModule,
    MatDialogModule,
    MatPaginatorModule,
    MatToolbarModule,
    MaterialFileInputModule,
    HighchartsChartModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
