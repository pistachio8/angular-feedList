import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../models';
import { ApiService } from './api.service';

@Injectable()
export class UserService {

  public isAuthenticated = new Observable<boolean>();

  constructor( 
    private _api: ApiService,
     
    ) { }
}
