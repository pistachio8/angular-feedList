import { Component, OnInit, Input } from '@angular/core';
import { ArticleService, IArticleListConfig, IArticle } from '../../core';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styles: [`
    .page-link {
      cursor: pointer;
    }
  `]
})
export class ArticleListComponent {

  query: IArticleListConfig;
  results: IArticle[];
  loading: boolean = false;
  currentPage = 1;
  totalPages: Array<number> = [1];

  @Input() limit: number;
  @Input()
  set config( config: IArticleListConfig ) {
    if ( config ) {
      this.query = config;
      this.currentPage = 1;
      this.runQuery();
    }
  }

  constructor( private _articleService: ArticleService ) { }

  // 페이지 이동
  setPageTo( pageNumber ) {
    this.currentPage = pageNumber;
    this.runQuery();
  }


  runQuery() {
    this.loading = true;
    this.results = [];

    if ( this.limit ) {
      this.query.filters.limit = this.limit;
      this.query.filters.offset = ( this.limit * (this.currentPage - 1));
    }

    this._articleService.query( this.query )
        .subscribe( data => {
          this.loading = false;
          this.results = data.articles;
          
          this.totalPages = Array.from(new Array(Math.ceil(data.articlesCount / this.limit)), (val, index) => index + 1);
        });

  }

}
