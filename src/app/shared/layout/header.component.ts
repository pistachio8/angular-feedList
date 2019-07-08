import { Component, OnInit } from '@angular/core';
import { UserService, IUser } from '../../core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  currentUser: IUser;

  constructor(
    private _userService: UserService
  ) { }

  ngOnInit() {
    this._userService.currentUser.subscribe(
      (userData) => {
        this.currentUser = userData;
      }
    );
  }

}
