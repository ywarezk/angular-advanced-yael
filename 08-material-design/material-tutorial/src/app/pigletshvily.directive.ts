import { Directive } from '@angular/core';
import { AbstractControl, ValidationErrors, Validator, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: 'input[pigletshvily]',
  providers: [
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: PigletshvilyDirective
    }
  ]
})
export class PigletshvilyDirective implements Validator{

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    if (control.value === 'pigletshvily') {
      return null;
    } else {
      return {
        'pigletshvily': 'You have to type my dog name'
      }
    }
  }

}
