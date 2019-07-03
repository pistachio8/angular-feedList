import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public isAuthenticated = new Observable<boolean>();

  constructor() { }
}
