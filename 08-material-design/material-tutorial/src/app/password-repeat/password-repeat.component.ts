/**
 * angular gives you the tools to create your own form controls

 <input type="creditCard" [(ngModel)]="" />
 <input type="phoneNumber" />

 <app-password-repeat [formControl]="someFormControl">
 </app-password-repeat>


{
  email: '',
  password: ''
}

<form> - group
  <input name="email" /> formControl
  <input name="password" /> formControl
</form>

{
  personalInformation: {
    firstName: '',
    lastName: '',
  },
  address: {
    city: '',
    country
  },
  phoneNumbers: []
}

<form>
  <input name="firstName" />
  <input name="lastName" />

  <input name="city" />
  <input name="country" />
</form>

 */

import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, NG_VALUE_ACCESSOR } from '@angular/forms';

/**
 *

 {
   password: '',
   repeat: ''
 }

 */

@Component({
  selector: 'app-password-repeat',
  template: `
    <div [formGroup]="passwordRepeat">
      <input type="password" name="password" formControlName="password" (blur)="touchCallback()" />
      <input type="password" name="repeat" formControlName="repeat" (blur)="touchCallback()" />
    </div>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: PasswordRepeatComponent
    }
  ]
})
export class PasswordRepeatComponent implements ControlValueAccessor, OnInit {
  public _changeCb: any;
  touchCallback: any;

  passwordRepeat = this._formBuilder.group({
    password: '',
    repeat: ''
  })

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.passwordRepeat.valueChanges.subscribe((value) => {
      if (this._changeCb) {
        this._changeCb(value);
      }
    })
  }

  /**
   *
   <input type="creditCard" [(ngModel)]="myCreditCard" />
   myCreditCard = '1234-1224'

  ngModel ---> PasswordRepeatComponent

   * @param obj
   */
  writeValue(obj: {password: string, repeat: string}): void {
    this.passwordRepeat.setValue(obj || {password: '', repeat: ''});
  }

  /**

   ngModel <------- PasswordRepeatComponent


   */
  registerOnChange(fn: any): void {
    this._changeCb = fn;
  }

  /**

   ngModel <-------- PasswordRepeatComponent


   */
  registerOnTouched(fn: any): void {
    this.touchCallback = fn;
  }

}
