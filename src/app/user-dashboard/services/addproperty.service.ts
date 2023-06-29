import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AddpropertyService {
// url ='http://localhost:7255/api/Property';
  constructor(private http:HttpClient) {
    
   }
   savePropertyData(data: any){
    console.log(data);
    // return this.http.post(this.url,data);
  }
}
