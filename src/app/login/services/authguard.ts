import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateFn } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateFn {

  CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot) => ;

}
