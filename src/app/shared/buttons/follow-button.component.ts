import { Component, Input, EventEmitter } from '@angular/core';
import { IProfile, UserService, ProfileService } from 'src/app/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-follow-button',
  templateUrl: './follow-button.component.html',
  styles: []
})
export class FollowButtonComponent {
  @Input() profile: IProfile;
  @Input() toggle = new EventEmitter<boolean>();
  isSubmitting = false;

  constructor(
    private _profileService: ProfileService,
    private _router: Router,
    private _userService: UserService
  ) { }

  toggleFollowing() {
    this.isSubmitting = true;

    // user authenticate

    if ( !this.profile.following ) {
      return this._profileService.follow( this.profile.username )
          .pipe(
            tap(
              data => {
                this.isSubmitting = false;
                this.toggle.emit(true);
              },
              error => this.isSubmitting = false
            )
          );
    } else {
      return this._profileService.unfollow( this.profile.username )
          .pipe(
            tap(
              data => {
                this.isSubmitting = false;
                this.toggle.emit(false);
              },
              error => this.isSubmitting = false
            )
          )
    }
  }  

}
