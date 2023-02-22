import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

/*
The route guard CanActivate checks whether a user can access the route
*/

@Injectable({
  providedIn: 'root'
})
export class CanActivateGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(
        route.queryParams['account'] === 'admin' &&
        route.queryParams['password'] === '1234'
      ) {
        /*
        console.log(route);
        console.log(state);
        */
        return true
      }
    return false;
  }
}
