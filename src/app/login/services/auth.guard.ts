import {
  CanActivateFn,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

export class AuthGuard implements CanActivateFn {
  constructor(private router: Router, private JwtHelper: JwtHelperService) {}
  CanActivateFn(
    next: ActivatedRouteSnapshot,
    stata: RouterStateSnapshot
  ): boolean {
    const token = localStorage.getItem('token');
    if (token && !this.JwtHelper.isTokenExpired(token)) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
