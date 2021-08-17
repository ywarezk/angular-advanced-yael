import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[someDirective]'
})
export class SomeDirectiveDirective {

  constructor(private _element: ElementRef) {
    this._element.nativeElement.style.backgroundColor = 'red';
  }

}
