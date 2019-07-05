import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';
import { IProfile } from '../models';
import { Observable } from 'rxjs';

@Injectable()
export class ProfileService {

  constructor( private _api: ApiService ) { }

  get( username: string ): Observable<IProfile> {
    return this._api.get('/profiles/' + username )
      .pipe( map( (data: { profile: IProfile } )=> data.profile ));
  }

  follow( username: string ): Observable<IProfile> {
    return this._api.post('/profiles/' + username + '/follow' );
  }

  unfollow( username: string ): Observable<IProfile> {
    return this._api.delete('/profiles/' + username + '/follow' );
  }
}
