import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService, aqiCityList, aqiCity } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnDestroy {

  aqiCityList: aqiCityList | undefined;
  sub: any;

  constructor(private dataService: DataService,  private router: Router) {
    
  }

  navigate(city: aqiCity) {
    
    this.router.navigate(['chart',city.city])
  }
  ngOnInit(): void {
  this.sub = this.dataService.aqiData.subscribe(list=> this.aqiCityList= list);
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
