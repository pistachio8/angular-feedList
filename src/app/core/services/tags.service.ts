import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class TagsService {

  constructor( private _api: ApiService) { }

  getAll(): Observable<[string]> {
    return this._api.get('/tags')
      .pipe( map( data => data.tags));
  }
}
