import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private userService: UserService
  ) {}

  isAuthenticated: boolean = true;
  listConfig: any = {
    type: 'all',
    filters: {}
  };

  ngOnInit() {
    if ( this.isAuthenticated ) {
      this.setListTo('feed');
    } else {
      this.setListTo('all');
    }
    
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
