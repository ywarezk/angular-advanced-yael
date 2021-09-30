import { Component, Inject, InjectionToken, OnInit } from '@angular/core';
import { UserService } from '../user-service.service';
import { EXTRA_CONFIG } from './token';



@Component({
  selector: 'app-child',
  template: `
    <p>
      message in child: {{ message }} {{userService.random}}
    </p>
<!--
    <div someDirectirve>
    </div> -->
  `,
  providers: [
    // UserService,
    {
      provide: 'hello',
      useValue: 'from ChildComponent'
    }
  ]
})
export class ChildComponent{

  constructor(
    @Inject('hello') public message: string,
    public userService: UserService,
    @Inject(EXTRA_CONFIG) extraConfig: string
  ) { }


}
