/**

*ngIf="user$ | async"

<div *ifUser="let user">
  <span>
    {{user.firstName}}
  </span>
</div>

 */

import { Directive, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from './user.service';

@Directive({
  selector: '[ifUser]'
})
export class IfUserDirective implements OnInit, OnDestroy {
  private _sub: Subscription | null = null;;

  constructor(
    private _template: TemplateRef<{$implicit: string}>,
    private _viewContainer: ViewContainerRef,
    private _user: UserService
  ) { }

  ngOnInit() {
    // ----o----o----o--|-------->
    // ----o----o----o----------->
    // pending
    // this._user.user$.toPromise()

    this._sub = this._user.user$.subscribe((user: string | null) => {
      if (user) {
        this._viewContainer.createEmbeddedView(this._template, {$implicit: user})
      }
    })
  }

  ngOnDestroy() {
    this._sub?.unsubscribe();
  }
}
