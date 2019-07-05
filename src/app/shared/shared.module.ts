import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListComponent, ArticlePreviewComponent, ArticleMetaComponent } from './article-helpers';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FavoriteButtonComponent } from './buttons/favorite-button.component';
import { FollowButtonComponent } from './buttons/follow-button.component';

@NgModule({
  declarations: [
    ArticleListComponent, 
    ArticlePreviewComponent, 
    ArticleMetaComponent, FavoriteButtonComponent, FollowButtonComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [
    ArticleListComponent,
    ArticleMetaComponent,
    ArticlePreviewComponent,
    FavoriteButtonComponent,
    FollowButtonComponent,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ]
})
export class SharedModule { }
