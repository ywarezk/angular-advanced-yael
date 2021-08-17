import { Directive, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { UserService } from './user.service';

@Directive({
  selector: '[ifUser]'
})
export class IfUserDirective implements OnInit {

  constructor(
    private _template: TemplateRef<{$implicit: string}>,
    private _viewContainer: ViewContainerRef,
    private _user: UserService
  ) { }

  ngOnInit() {
    this._user.user$.subscribe((user: string | null) => {
      if (user) {
        this._viewContainer.createEmbeddedView(this._template, {$implicit: user})
      }
    })
  }
}
