import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // HttpClientModule
  ],
  providers: [
    {
      provide: 'hello',
      useValue: 'hello from StamModule'
    },
    /*
    {
      provide: HTTP_INTERCEPTORS,
      ...
    }
    */
  ]
})
export class StamModule { }
