import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enivronment } from 'src/environment/environment';
import { User } from '../model/user';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private baseUrl = 'https://localhost:7255/api/Account/Register';

  constructor(private http: HttpClient) {}

  register(user: User): Observable<any> {
    const url = `${this.baseUrl}`;
    return this.http.post(url, user);
  }
}
