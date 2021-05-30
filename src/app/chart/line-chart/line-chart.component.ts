import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService, aqiCity } from 'src/app/data.service';
import { EChartsOption } from 'echarts';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit, OnDestroy {
  dataSub: any;
  aqiCity: aqiCity | undefined;
  xAxis:any[] =[];
  yAxis:any[] =[];

  constructor(private dataService: DataService,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.generateChart();
    this.dataSub  = combineLatest(this.activatedRoute.params,this.dataService.aqiData).subscribe((data)=>{
      if(data[0] && data[1]) {
          const city = data[0]['city'];
          this.aqiCity =data[1][city];
          if(this.aqiCity) {
            this.chartData();
          } 
      }
    })
  }
  
  ngOnDestroy() {
      this.dataSub.undefined();
  }
  
  chartData () {
    const x= this.aqiCity?.date.toLocaleTimeString();
    if(this.xAxis.indexOf(x) === -1){
      this.xAxis.push(this.aqiCity?.date.toLocaleTimeString())
      this.yAxis.push(this.aqiCity?.aqi);
    }
 
    this.chartOption = {
      xAxis: {
        type: 'category',
        data: this.xAxis,
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: this.yAxis,
          type: 'line',
        },
      ],
    };
  }

  generateChart() {
    this.chartOption = {
      xAxis: {
        type: 'category',
        data: this.xAxis,
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: this.yAxis,
          type: 'line',
        },
      ],
    };
  }

  chartOption: EChartsOption = {}

}