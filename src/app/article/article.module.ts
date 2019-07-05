import { NgModule } from '@angular/core';

import { ArticleRoutingModule } from './article-routing.module';
import { ArticleResolver } from './article-resolver.service';

import { SharedModule } from '../shared';

import { ArticleComponent } from './article.component'
import { ArticleCommentComponent } from './article-comment.component';
import { MarkdownPipe } from './markdown.pipe';




@NgModule({
  declarations: [
    ArticleComponent,
    ArticleCommentComponent,
    MarkdownPipe
  ],
  imports: [
    ArticleRoutingModule,
    SharedModule
  ],
  providers: [ ArticleResolver ]
})
export class ArticleModule { }
