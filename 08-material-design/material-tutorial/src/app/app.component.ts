import { Component } from '@angular/core';
import { FormBuilder, Validators, ValidatorFn, AbstractControl, AsyncValidatorFn } from '@angular/forms';

const myValidator: ValidatorFn = (control: AbstractControl) => {
  // return {myValidator: []}
  return null;
}

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

      <form>
        <!-- pigleshvily -->
        <!-- error please put pigletshvily -->
        <input name="dog" type="text" pigletshvily [(ngModel)]="myDogName" #dogNgModel="ngModel" />
        {{ dogNgModel.errors | json }}
        <br />
        <input name="serverName" type="text" checkWithServer [(ngModel)]="serverName" #serverNameNgModel="ngModel" />


        {{ serverNameNgModel.errors | json }}
      </form>


<!--
      <input type="file" />


      <form [formGroup]="sampleForm">
        <input (blur)="checkSomething()" required  minlength="5" maxlength="100" pattern="[0-9]*" type="text" formControlName="name" />
        <textarea email formControlName="address" [formControl]="sampleForm.controls['address']"></textarea>

        <!-- <input-and-textarea formGroupName=""></input-and-textarea> --> -->
        <!-- <button type="submit">
          Submit form
        </button>
      </form> -->

    </div>

  `,
})
export class AppComponent {
  myDogName = '';
  serverName = '';

  sampleForm = this._formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(5), myValidator], []],
    address: '',
    namePlusAddress: this._formBuilder.group({
      name: '',
      address: ''
    })
  })

  myPasswordRepeat = {password: 'hello', repeat: 'world'}

  constructor(private _formBuilder: FormBuilder){}

  checkSomething() {

  }
}
