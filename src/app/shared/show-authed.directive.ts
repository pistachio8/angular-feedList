import { Directive, OnInit, TemplateRef, ViewContainerRef, Input } from '@angular/core';
import { UserService } from '../core';

@Directive({
  selector: '[appShowAuthed]'
})
export class ShowAuthedDirective implements OnInit {
  condition: boolean;

  @Input() set appShowAuthed( condition: boolean ) {
    this.condition = condition;
  }

  constructor(
    private _templateRef: TemplateRef<any>,
    private _userService: UserService,
    private _viewContainer: ViewContainerRef
  ) { }

  ngOnInit() {
    this._userService.isAuthenticated.subscribe(
      (isAuthenticated) => {
        console.log(this.condition);
        
        if ( isAuthenticated && this.condition || !isAuthenticated && !this.condition) {
          this._viewContainer.createEmbeddedView(this._templateRef);
        } else {
          this._viewContainer.clear();
        }
      }
    );
  }

}
