/**

// if (isPlatformBrowser) {
  // document.getElementById('stam').classList.push('admin')
// }

this._renderer.addClass(myElem, 'admin')


<div class="admin" id="stam" #someDiv>
</div>


 */


import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ssr-tutorial';

  constructor(
    @Inject(DOCUMENT) private _document: Document,
    @Inject(PLATFORM_ID) private _platformId: Object,
    private _renderer: Renderer2
  ) {}

  ngOnInit() {
    // const footer = this._document.getElementById('footer');
    // if (typeof document !== 'undefined') {
    if (isPlatformBrowser(this._platformId)) {
      const footer = document.getElementById('footer');
      console.log(footer);
    }

    this.title = 'hello world';
  }
}
