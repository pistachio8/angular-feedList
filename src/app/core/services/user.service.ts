import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, BehaviorSubject, ReplaySubject } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';

import { IUser } from '../models';

import { ApiService } from './api.service';
import { JwtService } from './jwt.service';




@Injectable()
export class UserService {
  private _currentUserSubject = new BehaviorSubject<IUser>({} as IUser);
  public currentUser = this._currentUserSubject.asObservable().pipe( distinctUntilChanged());

  private _isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this._isAuthenticatedSubject.asObservable();

  constructor( 
    private _api: ApiService,
    private _http: HttpClient,
    private _jwtService: JwtService 
    ) { }

    populate(){
      if ( this._jwtService.getToken() ) {
        this._api.get('/user')
        .subscribe(
          data => this.setAuth(data.user),
          error => this.purgeAuth()
        );
      } else {
        this.purgeAuth();
      }
    }

    setAuth( user: IUser ) {
      // 로컬스토리지에 토큰 저장
      this._jwtService.saveToken( user.token );

      // 현재 user 데이터를 옵저버블에 설정
      this._currentUserSubject.next( user );

      // 인증 성공 옵저버
      this._isAuthenticatedSubject.next( true );
    }

    purgeAuth() {
      // 토큰 삭제
      this._jwtService.destroyToken();

      // 현재 user 옵저버블 초기화
      this._currentUserSubject.next({} as IUser );

      // 인증 실패 옵저버
      this._isAuthenticatedSubject.next( false );
    }

    attemptAuth( type, credentials ): Observable<IUser> {
      const route = ( type === 'login' ) ? '/login' : '';
      return this._api.post('/users' + route, { user: credentials } )
        .pipe(
          map( 
            data => {
              this.setAuth( data.user );
              return data
            }
        ));
    }

    getCurrentUser(): IUser {
      return this._currentUserSubject.value;
    }

    update( user ): Observable<IUser> {
      return this._api
      .put( '/users' , { user })
      .pipe( map(
        data => {
          this._currentUserSubject.next( data.user );
          return data.user;
        }
      ));
    }
    
}
