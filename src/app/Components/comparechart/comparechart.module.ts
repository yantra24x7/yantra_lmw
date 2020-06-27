import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ComparechartRoutingModule } from './comparechart-routing.module';
import { ComparechartComponent } from './comparechart.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { DatePipe } from '@angular/common';

const routes: Routes = [{ path: '', component: ComparechartComponent }];


@NgModule({
  declarations: [ComparechartComponent],
  imports: [RouterModule.forChild(routes),
    CommonModule, SharedModule, HighchartsChartModule,
    ComparechartRoutingModule
  ],
  providers: [
    DatePipe
  ]
})
export class ComparechartModule { }
