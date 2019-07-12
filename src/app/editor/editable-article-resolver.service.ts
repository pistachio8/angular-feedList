import { Injectable } from '@angular/core';
import { ArticleService, UserService, IArticle } from '../core';
import { Router, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class EditableArticleResolver implements Resolve<IArticle> {

  constructor(
    private _articlesService: ArticleService,
    private _router: Router,
    private _userService: UserService
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this._articlesService.get( route.params['slug'] )
        .pipe(
          map(
            article => {
              if ( this._userService.getCurrentUser().username === article.author.username ) {
                return article;
              } else {
                this._router.navigateByUrl('/');
              }
            }
          ),
          catchError( (error) => this._router.navigateByUrl('/') )
        );
  }
}
