import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: 'hello',
      useValue: 'hello from StamModule'
    }
  ]
})
export class StamModule { }
