import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { IProfile, ProfileService } from '../core';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ProfileResolver implements Resolve<IProfile> {

  constructor(
    private _profileService: ProfileService,
    private _router: Router
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this._profileService.get( route.params['username'] )
        .pipe( catchError( (error) => this._router.navigateByUrl('/') ));
  }
}
