import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>RXJS Examples</h1>
    <button (click)="stamCondition = !stamCondition">
      toggle stam condition
    </button>
    <app-child *ngIf="stamCondition"></app-child>
  `
})
export class AppComponent {
  stamCondition = true;
}
