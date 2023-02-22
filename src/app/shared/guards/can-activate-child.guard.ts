import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

/*
The route guard CanActivateChild checks whether a user can access a child route
*/

@Injectable({
  providedIn: 'root'
})
export class CanActivateChildGuard implements CanActivateChild {
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      /*
      console.log(childRoute);
      console.log(state);
      */

      if(
        childRoute.queryParams['acocunt'] === 'admin' &&
        childRoute.queryParams['password'] === '1234'
      ){
        return true
      }
      return false;
  }

}
