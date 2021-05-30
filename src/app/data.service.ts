import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';

export interface resAqiCity {
  city: string
  aqi: number
}

export interface aqiCity extends resAqiCity {
  date: Date;
}

export interface aqiCityList {
  [key: string]: aqiCity
}






@Injectable({
  providedIn: 'root'
})
export class DataService {
  aqiData = new BehaviorSubject<aqiCityList|undefined>(undefined);
  citylist: aqiCityList  = {} 
  constructor() {
    const ws = new WebSocket(environment.wsEnd);
    ws.onmessage = this.processMessage.bind(this);
    // ws.onerror = console.log
    // ws.onclose = console.log
  }

  private processMessage (ev: MessageEvent) {
    try {
    const data: aqiCity[] =JSON.parse(ev.data);
    const processed = data.reduce((a,b)=> (b.aqi = +b.aqi.toFixed(2),b.date = new Date(),a[b.city]=b,a),{} as aqiCityList);
    this.citylist ={ ...this.citylist, ...processed};
    this.aqiData.next(this.citylist);
    }
    catch (e) {
      console.error("some error with input data please contact backend")
    }
  }
}
