import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

/*
The route guard CanLoad checks whether a user can use lazy loading
*/
@Injectable({
  providedIn: 'root'
})
export class CanLoadGuard implements CanLoad {
  canLoad(
    route: Route,
    segments: UrlSegment[]):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      /*
      console.log(route);
      console.log(segments); os segmentos/paths já carregados
      */

      if(segments[1]?.path === 'leads'){
        return true;
      }
      alert('Módulo não carregado!')
      return false;
  }
}
