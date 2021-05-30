import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';


import { ChartRoutingModule } from './chart-routing.module';
import { LineChartComponent } from './line-chart/line-chart.component';


@NgModule({
  declarations: [
    LineChartComponent
  ],
  imports: [
    CommonModule,
    ChartRoutingModule,
    NgxEchartsModule.forRoot({
      /**
       * This will import all modules from echarts.
       * If you only need custom modules,
       * please refer to [Custom Build] section.
       */
      echarts: () => import('echarts'), // or import('./path-to-my-custom-echarts')
    }),
  ]
})
export class ChartModule { }
