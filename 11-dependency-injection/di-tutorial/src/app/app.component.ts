import { Component, Inject, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>
      {{ helloWorld }}
    </h1>

    <app-child></app-child>
    <app-child></app-child>
    <app-child></app-child>

    <app-brother></app-brother>
  `,
  // providers: [
  //   {
  //     provide: 'hello',
  //     useValue: 'value from AppComponent'
  //   }
  // ]
})
export class AppComponent {
  title = 'di-tutorial';

  constructor(
    @Inject('hello') public helloWorld: string,
    private _renderer: Renderer2
  ) {}
}
