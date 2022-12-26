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

  /* getBusLiveLocation() {
    return this.http.get('https://api.rmtsbus.in/graphql');
  } */
}
