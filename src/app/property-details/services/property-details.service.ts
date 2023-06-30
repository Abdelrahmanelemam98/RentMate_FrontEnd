import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PropertyDetails } from '../models/property-details';

@Injectable({
  providedIn: 'root',
})
export class PropertyDetailsService {
  property: any;
  constructor(public http: HttpClient) {}
  base = 'https://localhost:7255/api/Property';

  getByid(id: number) {
    return this.http.get<PropertyDetails>(this.base + '/' + id);
  }
}
