import { Component, OnInit } from '@angular/core';
import { UserService, IUser,  } from '../core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styles: []
})
export class SettingsComponent implements OnInit {

  user: IUser = {} as IUser;
  settingsForm: FormGroup;
  errors: Object = {};
  isSubmitting = false;

  constructor(
    private _userService: UserService,
    private _router: Router,
    private fb: FormBuilder,
  ) { 
    this.settingsForm = this.fb.group({
      image: '',
      username: '',
      bio: '',
      email: '',
      password: ''
    });
  }

  ngOnInit() {
    Object.assign( this.user, this._userService.getCurrentUser() );
    this.settingsForm.patchValue( this.user );
  }

  logout() {
    this._userService.purgeAuth();
    this._router.navigateByUrl('/');
  }

  submitForm() {
    this.isSubmitting = true;

    // user 데이터 업데이트
    this.updateUser( this.settingsForm.value );

    this._userService
    .update( this.user )
    .subscribe(
      updatedUser => this._router.navigateByUrl('/profile/' + updatedUser.username ),
      error => {
        this.errors = error;
        this.isSubmitting = false;
      }
    );
  }

  updateUser( values: Object ) {
    Object.assign( this.user, values );
  }

}
