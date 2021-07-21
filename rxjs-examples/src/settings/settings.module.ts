import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountPageComponent } from './account-page/account-page.component';
import { CreditCardComponent } from './account-page/credit-card/credit-card.component';



@NgModule({
  declarations: [
    AccountPageComponent,
    CreditCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SettingsModule { }
