import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { 
  IArticle,
  ArticleService,
  IUser,
  UserService
} from '../core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styles: []
})
export class ArticleComponent implements OnInit {
  article: IArticle;
  currentUser: IUser;
  cnaModify: boolean;
  comments;
  commentControl = new FormControl();
  commentFormErrors = {};
  isSubmitting = false;
  isDeleting = false;

  
  constructor(
    private _route: ActivatedRoute,
    private _articleService: ArticleService,
    private _router: Router,
    private _userService: UserService
  ) { }

  ngOnInit() {
    // prefetch article
    this._route.data.subscribe(
      (data: { article: IArticle }) => {
        this.article = data.article;

        // load comments
        this.populateComments();
      }
    );

    // load current user data
    // this._userService.currentUser.subscribe(
    //   ( userData: IUser ) => {
    //     this.currentUser = userData;

    //     this.cnaModify = ( this.currentUser.username === this.article.author.username );
    //   } 
    // );
  }

  onToggleFavorite( favorited: boolean ) {
    this.article.favorited = favorited;

    if ( favorited ) {
      this.article.favoritesCount++;
    } else {
      this.article.favoritesCount--;
    }
  }

  onToggleFollowing( following: boolean ) {
    this.article.author.following = following;
  }

  deleteArticle() {
    this.isDeleting = true;

    this._articleService.destory( this.article.slug )
      .subscribe(
        success => {
          this._router.navigateByUrl('/');
        }
      );
  }

  populateComments() {

  }

  addComment() {

  }

  onDeleteComment() {

  }

}
