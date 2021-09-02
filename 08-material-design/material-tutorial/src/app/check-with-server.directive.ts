/*
{
  email: '',
  password: ''
}

{
  sections: {
    arrays: [],

  } ,
  creditCard: {

  },
  address: {

  }
}


*/


import { Directive } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors, NG_ASYNC_VALIDATORS } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Directive({
  selector: 'input[checkWithServer]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      multi: true,
      useExisting: CheckWithServerDirective
    }
  ]
})
export class CheckWithServerDirective implements AsyncValidator {

  constructor(private _http: HttpClient) { }

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this._http.get(`http://nztodo.herokuapp.com/api/tasks/?format=json&search=${control.value}`).pipe(
      map((data: any) =>{
        if (data.length > 0) {
          return null;
        } else {
          return { checkWithServer: 'server returned nothing'}
        }
      })
    )
  }

}
