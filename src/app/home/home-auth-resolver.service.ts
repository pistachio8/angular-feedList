import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../core/services/user.service';
import { take } from 'rxjs/operators';

@Injectable()
export class HomeAuthResolver implements Resolve<boolean> {

  constructor(
    private _router: Router,
    private _userService: UserService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this._userService.isAuthenticated.pipe( take(1) );
  }
}
