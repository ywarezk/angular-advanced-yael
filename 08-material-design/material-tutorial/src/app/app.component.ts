import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div style="margin-left: 50px;">
      <app-button-example>
      </app-button-example>

      <app-ng-content-example>
        <div>
          <h1 #someText>
            hello world
          </h1>
        </div>
        <div class="hello">
          <p>
          another data
          </p>
        </div>
      </app-ng-content-example>

      <app-checkbox-example>
      </app-checkbox-example>

      <app-password-repeat [(ngModel)]="myPasswordRepeat">
      </app-password-repeat>

      {{myPasswordRepeat | json}}
    </div>

  `,
})
export class AppComponent {
  myPasswordRepeat = {password: 'hello', repeat: 'world'}
}
