import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { 
  UserService,
  ArticleService,
  ApiService,
  JwtService,
  TagsService,
  ProfileService,
  AuthGuardService
} from './services';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpTokenInterceptor } from './interceptors';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [

  ],
  providers: [ 
    { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true },
    UserService,
    ArticleService,
    ApiService,
    JwtService,
    TagsService,
    ProfileService,
    AuthGuardService,
  ]
})
export class CoreModule { }
