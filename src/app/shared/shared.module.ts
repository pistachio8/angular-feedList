import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListComponent, ArticlePreviewComponent, ArticleMetaComponent } from './article-helpers';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './layout/header.component';
import { FooterComponent } from './layout/footer.component';

@NgModule({
  declarations: [
    ArticleListComponent, 
    ArticlePreviewComponent, 
    ArticleMetaComponent, HeaderComponent, FooterComponent
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
