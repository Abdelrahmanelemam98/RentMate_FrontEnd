import { Injectable } from '@angular/core';
import { Property } from '../Models/property';
import { TypeEnum } from '../Models/type-enums';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class PropertyService {

  private apiUrl = 'https://localhost:7255/api/Property/all';

  constructor(private http: HttpClient) { }

  getAllProperties(): Observable<Property[]> {
    return this.http.get<Property[]>(`${this.apiUrl}`);
  }

  getAllPropertiesLimit(limit: number): Observable<Property[]> {
    return this.http.get<Property[]>(`${this.apiUrl}`);
  }
}
