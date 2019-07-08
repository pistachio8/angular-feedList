import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService, IProfile, IUser } from '../core';
import { concatMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {

  profile: IProfile;
  currentUser: IUser;
  isUser: boolean;

  constructor(
    private _route: ActivatedRoute,
    private _userService: UserService
  ) { }

  ngOnInit() {
    this._route.data.pipe(
      concatMap( (data: { profile: IProfile }) => {
        this.profile = data.profile;

        return this._userService.currentUser.pipe( tap(
          (userData: IUser ) => {
            this.currentUser = userData;
            this.isUser = ( this.currentUser.username === this.profile.username );
            // console.log( this.currentUser );
            
          }
        ));
      })
    ).subscribe();
  }

  onToggleFollowing( following: boolean ) {
    this.profile.following = following;
  }

}
