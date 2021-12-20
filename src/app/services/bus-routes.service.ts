import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusRoutesService {

  constructor(private http: HttpClient) { }
  allRoutes:any ;
  url:string = 'assets/routeID.json';
  
  getallRoutes(src:any, dest:any) : Observable<any> {
    return this.http.get(this.url);
  }
}
