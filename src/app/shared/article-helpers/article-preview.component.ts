import { Component, OnInit, Input } from '@angular/core';
import { IArticle } from '../../core';

@Component({
  selector: 'app-article-preview',
  templateUrl: './article-preview.component.html',
  styles: []
})
export class ArticlePreviewComponent {
  @Input() article: IArticle;

  onToggleFavorite( favorited: boolean ) {
    this.article['favorited'] = favorited;
    if ( favorited ) {
      this.article['favoritesCount']++;
    } else {
      this.article['favoritesCount']--;
    }
  }
  

}
