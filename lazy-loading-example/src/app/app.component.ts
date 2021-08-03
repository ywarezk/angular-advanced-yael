import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>
      Lazy loading examples
    </h1>

    <nav>
      <ul>
        <li>
          <a routerLink="/">
            Home Page
          </a>
        </li>
        <li>
          <a routerLink="/settings">
            Settings Page
          </a>
        </li>
      </ul>
    </nav>

    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
}
