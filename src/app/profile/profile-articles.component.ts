import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IProfile, IArticleListConfig } from '../core';

@Component({
  selector: 'app-profile-articles',
  templateUrl: './profile-articles.component.html',
  styles: []
})
export class ProfileArticlesComponent implements OnInit {
  profile: IProfile;
  articlesConfig: IArticleListConfig = {
    type: 'all',
    filters: {}
  };

  constructor(
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this._route.parent.data.subscribe(
      (data: { profile: IProfile }) => {
        
        this.profile = data.profile;
        this.articlesConfig = {
          type: 'all',
          filters: {}
        };

        this.articlesConfig.filters.author = this.profile.username;
      }
    );
  }

}
