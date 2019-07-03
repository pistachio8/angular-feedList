import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styles: [`
    .page-link {
      cursor: pointer;
    }
  `]
})
export class ArticleListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
