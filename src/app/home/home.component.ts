import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService, IArticleListConfig, TagsService } from '../core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private _router: Router,
    private _userService: UserService,
    private _tagsService : TagsService
  ) {}

  isAuthenticated: boolean = false;
  listConfig: IArticleListConfig = {
    type: 'all',
    filters: {}
  };

  tags: Array<string> = [];
  tagsLoaded = false;

  ngOnInit() {
    if ( this.isAuthenticated ) {
      this.setListTo('feed');
    } else {
      this.setListTo('all');
    }

    this._tagsService.getAll()
    .subscribe( tags => {
      this.tags = tags;
      this.tagsLoaded = true;
    });
    
  }

  setListTo( type: string = '', filters: Object = {}) {
    // 인증되지 않은 접근이면 로그인 화면으로 리다이렉트
    // if ( type === 'feed' && ! this.isAuthenticated ) {
    //   this.router.navigateByUrl('/login');
    //   return;
    // }

    // 리스트 생성
    this.listConfig = { type: type, filters: filters };
  }
}
