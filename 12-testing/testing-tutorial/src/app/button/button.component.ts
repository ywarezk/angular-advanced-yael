import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <p *ngIf="isPShowing">
      button works!
    </p>
    <button (click)="isPShowing = !isPShowing">
      Click me
    </button>
  `,
  styles: [
  ]
})
export class ButtonComponent {
  isPShowing = true;
}
