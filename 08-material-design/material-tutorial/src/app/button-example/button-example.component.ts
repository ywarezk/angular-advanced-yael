/**
 * lets place angular material button
 */

import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-button-example',
  template: `
    <div class="button-example">
      <p>
        button-example works!
      </p>
      <button mat-raised-button color="primary" [disabled]="true">
        Some Button
      </button>
    </div>

  `,
  styleUrls: [
    'button-example.component.scss'
  ],
  encapsulation: ViewEncapsulation.None
})
export class ButtonExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
