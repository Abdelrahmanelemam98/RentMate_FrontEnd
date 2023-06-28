import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enivronment } from 'src/environment/environment';
import { User } from '../model/user';
@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  user: User = new User('', '', '', '', '', '');

  constructor(public http: HttpClient) {}
  base = enivronment.baseHttp;
  registerNewUser(user: User) {
    this.http.post<User>(this.base + '/register', user);
  }
}
