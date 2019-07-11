import { Component, OnInit, Input } from '@angular/core';
import { IErrors } from '../core';

@Component({
  selector: 'app-list-errors',
  templateUrl: './list-errors.component.html',
  styles: []
})
export class ListErrorsComponent {
  formattedErrors: Array<string> = [];

  @Input()
  set errors( errorList: IErrors) {
    this.formattedErrors = Object.keys(errorList.errors || {})
      .map(key => `${key} ${errorList.errors[key]}`);
  }

  get errorList() { return this.formattedErrors };

}
