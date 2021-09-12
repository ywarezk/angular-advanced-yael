import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloInterceptor } from './hello.interceptor';
import { UnauthorizedInterceptor } from './unauthorized.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([])
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: HelloInterceptor
    },
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: UnauthorizedInterceptor
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
