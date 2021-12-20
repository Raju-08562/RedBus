import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AvailableServicesService {

  constructor(private http : HttpClient) { }
  allbuseslist:any ;
url:string = 'assets/BussesMockData.json';

getAllbusses() : Observable<any> {
  return this.http.get(this.url);
}
}
