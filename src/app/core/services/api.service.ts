import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { JwtService } from './jwt.service';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiService {

  constructor(
    private _http: HttpClient,
    private _jwtService: JwtService
  ) { }

  private formatErrors( error: any ) {
    return throwError(error.error);
  }

  get( path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this._http.get( `${environment.api_url}${path}`, { params })
            .pipe( catchError( this.formatErrors ) );
  }

  put( path: string, body: Object = {} ): Observable<any> {
    return this._http.put( `${environment.api_url}${path}`, JSON.stringify( body ) )
                    .pipe( catchError( this.formatErrors ) );
  }

  post( path: string, body: Object = {}): Observable<any> {
    return this._http.post( `${environment.api_url}${path}`, JSON.stringify( body ) )
                    .pipe( catchError( this.formatErrors ) );
  }

  delete( path: any ): Observable<any> {
    return this._http.delete(
      `${environment.api_url}${path}`
    ).pipe( catchError( this.formatErrors ) );
  }
}
