import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products$: BehaviorSubject<string[]> = new BehaviorSubject([] as string[]);

  constructor() { }

  addProduct(newProduct: string) {
    const previousProducts = this.products$.value;
    previousProducts.push(newProduct);
    this.products$.next(previousProducts);
  }
}
