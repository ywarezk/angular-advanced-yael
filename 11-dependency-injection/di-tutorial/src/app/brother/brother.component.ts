import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-brother',
  template: `
    <p>
      brother works! {{ message }}
    </p>
  `
})
export class BrotherComponent implements OnInit {

  constructor(
    @Inject('hello') public message: string
  ) { }

  ngOnInit(): void {
  }

}
