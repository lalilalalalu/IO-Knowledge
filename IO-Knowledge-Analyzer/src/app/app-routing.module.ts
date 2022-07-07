import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SummaryComponent} from '../app/summary/summary.component';
import {ComparisonComponent} from '../app/comparison/comparison.component';
import {UploaderComponent} from '../app/uploader/uploader.component';
import {ConfigGeneratorComponent} from '../app/config-generator/config-generator.component';
import {Io500Component} from '../app/io500/io500.component';

const routes: Routes = [
  { path: 'summary-component', component:  SummaryComponent},
  { path: 'comparison-component', component: ComparisonComponent},
  { path: 'uploader-component', component: UploaderComponent},
  { path: 'config-generator-component', component: ConfigGeneratorComponent},
  { path: 'config-generator-component', component: ConfigGeneratorComponent},
  { path: 'io500-component', component: Io500Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
