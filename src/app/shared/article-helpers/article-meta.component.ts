import { Component, Input } from '@angular/core';
import { IArticle } from 'src/app/core';

@Component({
  selector: 'app-article-meta',
  templateUrl: './article-meta.component.html',
  styles: []
})
export class ArticleMetaComponent {
  @Input() article: IArticle;
}
