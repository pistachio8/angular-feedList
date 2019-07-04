import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { 
  UserService,
  ArticleService,
  ApiService,
  JwtService
} from './services';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [

  ],
  providers: [ 
    UserService,
    ArticleService,
    ApiService,
    JwtService
  ]
})
export class CoreModule { }
