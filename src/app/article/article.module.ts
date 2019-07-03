import { NgModule } from '@angular/core';

import { ArticleRoutingModule } from './article-routing.module';
import { SharedModule } from '../shared';

import { ArticleComponent } from './article.component'
import { ArticleCommentComponent } from './article-comment.component';



@NgModule({
  declarations: [
    ArticleComponent,
    ArticleCommentComponent
  ],
  imports: [
    ArticleRoutingModule,
    SharedModule
  ]
})
export class ArticleModule { }
