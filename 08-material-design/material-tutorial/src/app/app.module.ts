import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonExampleComponent } from './button-example/button-example.component';
import { MatButtonModule } from '@angular/material/button';
import { InputExampleComponent } from './input-example/input-example.component';
import { NgContentExampleComponent } from './ng-content-example/ng-content-example.component';
import { CheckboxExampleComponent } from './checkbox-example/checkbox-example.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordRepeatComponent } from './password-repeat/password-repeat.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonExampleComponent,
    InputExampleComponent,
    NgContentExampleComponent,
    CheckboxExampleComponent,
    PasswordRepeatComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
