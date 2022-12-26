import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RmtsService {

  constructor(private http: HttpClient) { }

  getAllBus(busNo:string = '') {
    return this.http.get(`https://api.rmtsbus.in/v0/buses/${busNo}`);
  }

  getAllBusStop() {
    return this.http.get('https://api.rmtsbus.in/v0/stations/?station=');
  }

  searchBusByBusStop(source: any, dest: any) {
    return this.http.get(`https://api.rmtsbus.in/v0/routes/?source=${source}&dest=${dest}`)
  }

  getAllBusFromJSON() {
    return this.http.get('assets/data/bus.json');
  }

  getAllBusStopFromJSON() {
    return this.http.get('assets/data/busstop.json');
  }

  getBusTimeFromJSON() {
    return this.http.get('assets/data/bustime.json');
  }

  /* getBusLiveLocation() {
    return this.http.get('https://api.rmtsbus.in/graphql');
  } */
}
