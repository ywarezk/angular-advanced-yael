import { Component } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>RXJS Examples</h1>
    <button (click)="stamCondition = !stamCondition">
      toggle stam condition
    </button>
    <app-child *ngIf="stamCondition"></app-child>

    <ul>
      <li *ngFor="let product of productsService.products$ | async">
        {{ product}}
      </li>
    </ul>
  `
})
export class AppComponent {
  stamCondition = true;

  constructor(public productsService: ProductService) {}
}
