import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styles: []
})
export class AuthComponent implements OnInit {
  authType: String = '';
  title: String = '';
  errors: any = { errors: {}};
  isSubmitting = false;
  authForm: FormGroup;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _fb: FormBuilder
  ) { 
    this.authForm = this._fb.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  ngOnInit() {
    this._route.url.subscribe( data => {
      // login 인지 register인지
      this.authType = data[data.length - 1].path;

      this.title = (this.authType === 'login') ? 'Sign in' : 'Sign up';

      // 회원가입일때 username 입력 폼컨트롤 추가 
      if ( this.authType === 'register' ) {
        this.authForm.addControl('username', new FormControl());
      }
    });
  }

  submitForm() {
    this.isSubmitting = true;
    this.errors = { errors: {} };

    const credentials = this.authForm.value;
    this._userService
      .attemptAuth(this.authType, credentials)
      .subscribe(
        data => this._router.navigateByUrl('/'),
        error => {
          this.errors = error;
          this.isSubmitting = false;
        }
      );
  }

}
