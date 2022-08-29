import { Photos } from './../photo/photo';
import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';

import { PhotoService } from '../photo/photo.service';

@Injectable({
  providedIn: 'root',
})
export class PhotoListResolver implements Resolve<Observable<Photos>> {
  constructor(private service: PhotoService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Photos> {
    const userName = String(route.paramMap.get('userName'));
    return this.service.listFromUserPaginate(userName, 1);
  }
}
