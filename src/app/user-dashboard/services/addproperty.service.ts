import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { City } from '../Models/City';
import { property } from '../Models/property';
@Injectable({
  providedIn: 'root'
})
export class AddpropertyService {

url ='https://localhost:7255/api/';
  constructor(private http:HttpClient) {
    
   }
   getCityById(govid: number) {
    return this.http.get<City[]>(this.url+"City/" + govid);
  }
  addCustomer(Object:any){
    return this.http.post(this.url+"Stripe/customer/add", Object);
  }
  stripePayment(Object:any){
    return this.http.post(this.url+"Stripe/payment/add", Object);
  }


  saveProperty(Object1:any){
    return this.http.post(this.url+"Property/", Object1);
  }
  
}
