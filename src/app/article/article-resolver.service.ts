import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { ArticleService, UserService, IArticle } from '../core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ArticleResolver implements Resolve<IArticle>{

  constructor(
    private _router: Router,
    private _articleService: ArticleService,
    private _userService: UserService
  ) { }

  resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<any> {
    
    return this._articleService.get( route.params['slug'] )
          .pipe( catchError( (error) => this._router.navigateByUrl('/') ));

  }
}
