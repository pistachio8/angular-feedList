import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler } from '@angular/common/http';
import { JwtService } from '../services';
import { Observable } from 'rxjs';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
    constructor( private _jwtService: JwtService ) {}

    intercept( req: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
        const headersConfig = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };

        const token = this._jwtService.getToken();

        if( token ) {
            headersConfig['Authorization'] = `Token ${token}`;
        }

        const request = req.clone( {setHeaders: headersConfig });
        return next.handle( request );
    }
}