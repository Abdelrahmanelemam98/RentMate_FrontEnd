import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(private route: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = JSON.parse(window.atob(token.split('.')[1]));
      const expirationDate = new Date(decodedToken.exp * 1000);
      const currentDate = new Date();
      if (currentDate < expirationDate) {
        return true;
      }
      localStorage.removeItem('token');
    }
    this.route.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
