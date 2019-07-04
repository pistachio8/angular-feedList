import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListComponent, ArticlePreviewComponent, ArticleMetaComponent } from './article-helpers';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ArticleListComponent, 
    ArticlePreviewComponent, 
    ArticleMetaComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ArticleListComponent,
    ArticleMetaComponent,
    ArticlePreviewComponent,
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
