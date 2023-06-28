import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}
  login(email: String, password: String) {
    return this.http.post<any>('http:localhost:300/login', {
      email: email,
      password: password,
    });
  }
  logout() {
    localStorage.removeItem('token');
  }
}
