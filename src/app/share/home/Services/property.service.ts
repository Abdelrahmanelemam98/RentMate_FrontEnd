import { Injectable } from '@angular/core';
import { Property } from '../Models/property';
import { TypeEnum } from '../Models/type-enums';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class PropertyService {
  // constructor(public http: HttpClient) {}
  // base = 'localhost:4200/property';
  // getAllProperty() {
  //   return this.http.get<{ message: String; data: Property[] }>(this.base);
  // }
}
