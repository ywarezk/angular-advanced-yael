import { APP_INITIALIZER, NgModule, InjectionToken } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { UserService } from './user-service.service';
import { BrotherComponent } from './brother/brother.component';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { StamModule } from 'src/stam/stam.module';
import { EXTRA_CONFIG } from './child/token';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    BrotherComponent
  ],
  imports: [
    BrowserModule,
    StamModule,
    /*
    HttpClientModule.forRoot([
      MyInterceptor
    ])
    */
    // LoggerModule.forFeature('AppModule')
  ],
  providers: [
    // UserService
    /*{
      provide: UserService,
      useClass: UserService
    }*/

    // singleton DI - not true
    {
      provide: 'hello',
      useValue: 'world from AppModule'
    },
    UserService,
    // {
    //   provide: APP_INITIALIZER,

    // }

    /*
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: MyInterceptor
    }
    */
    {
      provide: EXTRA_CONFIG,
      useValue: 'some config im passing to the child componet'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
