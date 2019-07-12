import { Component, OnInit } from '@angular/core';
import { IArticle, ArticleService } from '../core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styles: []
})
export class EditorComponent implements OnInit {
  article: IArticle = {} as IArticle;
  articleForm: FormGroup;
  tagField = new FormControl();
  errors: Object = {};
  isSubmitting = false;

  constructor(
    private _articleSerivce: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router,
    private fb: FormBuilder
  ) { 
    this.articleForm = this.fb.group({
      title: '',
      description: '',
      body: ''
    });

    this.article.tagList = [];
  }

  ngOnInit() {
    this._route.data.subscribe( (data: { article: IArticle }) => {
      if ( data.article ) {
        this.article = data.article;
        this.articleForm.patchValue(data.article);
      }
    });
  }

  addTag() {
    const tag = this.tagField.value;
    if ( this.article.tagList.indexOf(tag) < 0 ) {
      this.article.tagList.push(tag);
    }

    this.tagField.reset('');
  }

  removeTag( tagName: string ) {
    this.article.tagList = this.article.tagList.filter(tag => tag !== tagName );
  }

  submitForm() {
    this.isSubmitting = true;

    this.updateArticle(this.articleForm.value);

    this._articleSerivce.save(this.article).subscribe(
      article => this._router.navigateByUrl('/article/'+ article.slug),
      error => {
        this.errors = error;
        this.isSubmitting = false;
      }
    );
  }

  updateArticle(values: Object) {
    Object.assign(this.article, values);
  }
}
