import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ArticleService, UserService, IArticle } from '../../core';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-favorite-button',
  templateUrl: './favorite-button.component.html',
  styles: []
})
export class FavoriteButtonComponent implements OnInit {
  @Input() article: IArticle;
  @Output() toggle = new EventEmitter<boolean>();
  isSubmitting = false;

  constructor(
    private _articleService: ArticleService,
    private _router: Router,
    private _userService: UserService
  ) { }

  toggleFavorite() {
    this.isSubmitting = true;

    // this._userService.isAuthenticated

    if ( !this.article.favorited) {
      return this._articleService.favorite(this.article.slug)
        .pipe(
          tap( data => {
            this.isSubmitting = false;
            this.toggle.emit(true);
          },
          error => this.isSubmitting = false 
          )
        );
    } else {
      return this._articleService.unfavorite(this.article.slug)
        .pipe(
          tap( data => {
            this.isSubmitting = false;
            this.toggle.emit(false);
          },
          error => this.isSubmitting = false
          )
        );
    }
  }
  
  ngOnInit() {
  }

}
