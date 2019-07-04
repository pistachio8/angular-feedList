import { Injectable } from '@angular/core';

import { ApiService } from './api.service';
import { IArticle, IArticleListConfig } from '../models';

import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class ArticleService {

  constructor(
    private _api: ApiService
  ) {}

  query( config: IArticleListConfig ): Observable<{articles: IArticle[], articlesCount: number}> {
    const params = {};

    Object.keys(config.filters)
    .forEach( (key) => {
      params[ key ] = config.filters[ key ];
    });
    
    return this._api
      .get(
        '/articles' + ( (config.type === 'feed') ? '/feed' : ''),
        new HttpParams( { fromObject: params })
      );
  }

  get( slug: any ): Observable<IArticle> {
    return this._api.get( '/articles/' + slug )
          .pipe( map( data => data.article ));
  }

  destory( slug: any ) {
    return this._api.delete( '/articles/' + slug );
  }

  save( article: any ): Observable<IArticle> {
    // article이 있다면 update
    if ( article.slug ) {
      return this._api.put( '/articles/' + article.slug, { article })
              .pipe( map( data => data.article) );
    } else {
      return this._api.post( '/articles/', { article })
              .pipe( map( data => data.article) );
    }
  }

  favorite( slug ): Observable<IArticle> {
    return this._api.post( '/articles/' + slug + '/favorite' );
  }

  unfavorite( slug ) {
    return this._api.delete( '/articles/' + slug + '/favorite' );
  }
}
