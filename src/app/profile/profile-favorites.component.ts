import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProfile, IArticleListConfig } from '../core';

@Component({
  selector: 'app-profile-favorites',
  templateUrl: './profile-favorites.component.html',
  styles: []
})
export class ProfileFavoritesComponent implements OnInit {

  profile: IProfile;
  favoritesConfig: IArticleListConfig = {
    type: 'all',
    filters: {}
  };

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.parent.data.subscribe(
      (data: {profile: IProfile}) => {
        this.profile = data.profile;
        this.favoritesConfig.filters.favorited = this.profile.username;
      }
    )
  }

}
