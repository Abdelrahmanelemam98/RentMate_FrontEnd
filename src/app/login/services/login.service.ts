import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { LoginModel } from '../model/login';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl = 'https://localhost:7255/api/Account/Login'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  login(newlogin: LoginModel): Observable<any> {
    return this.http.post<any>(this.apiUrl, newlogin).pipe(
      map((response) => {
        if (response && response.token) {
          localStorage.setItem('token', response.token);
          const role = this.getRoleFromToken(response.token);
          if (role === 'Admin' || 'User') {
            localStorage.setItem('role', role);
          } else {
            localStorage.removeItem('role');
          }
        }
        return response;
      })
    );
  }

  private getRoleFromToken(token: string): string {
    const decodedToken = JSON.parse(window.atob(token.split('.')[1]));
    return decodedToken[
      'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'
    ];
  }
  isLoggedIn(): boolean {
    return localStorage.getItem('token') !== null;
  }

  logout(): void {
    localStorage.removeItem('token');
  }
}
