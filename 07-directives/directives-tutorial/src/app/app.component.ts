import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UserService } from './user.service';


/**

<div *ifUser="let someUser">
  {{ someUser.firstName }}
</div>


 */

@Component({
  selector: 'app-root',
  template: `
    <h1 someDirective>
      Directives {{ calculate() }}
    </h1>

    <button analytics="button1" (click)="someFunction()">
      click me
    </button>

    <button analytics="button2" (click)="someFunction()">
      click me
    </button>

    <header>
      <h1 *ifUser="let user" >
        hello {{user}}
      </h1>

      <!--

        <ng-template [ifUser]>
          <h1  >
            hello {{user}}
          </h1>
        </ng-template>
      -->
    </header>

<!--
      <h1>
        Hello
        <span *ngIf="user$ | async; else guestUser"> {{ user$ | async}}</span>
        <ng-template #guestUser>
          <span>Guest</span>
        </ng-template>

      </h1> -->
    <!-- </header> -->
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  user$ = this._user.user$;

  constructor(private _user: UserService) {}

  someFunction() {
    this._user.user$.next('Yariv');
  }

  calculate() {
    // ....
    console.log('cd');
  }
}
