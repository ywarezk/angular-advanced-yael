
# Change Detection in Angular

```
> npx @angular/cli new cd-tutorial
```

## What is Change Detection (CD)

- Angular suspects that something maybe changed
- Angular refresh the dom if needed {{}}, []

## Suspects that something happened? 

- Events - click, mouseover
- http request - fetch
- promise
- observable
- timers

something async happened

## We need to measure our angular app

- ex. install the angular dev tools chrome extensions
[angualr dev tools](https://angular.io/guide/devtools)
- npx @angular/cli new stam
- npx ng serve
- open chrome developer tools and make sure a new angular tab was added

## Which components will render on async event

- by default all of them

## Which order does the cd works

- by default from top to bottom

## Automatic change detection

angular automatically detects that something async happened and triggers cd  
angular knows that something async happened because the library zone.js slightly adjust the async methods to know when they are called.  
execution context

## Zone.js

angular opt-out zone.js

https://www.youtube.com/watch?v=9nGjgZSVptk

## How does change detection on push works?

## what triggers cd when a component is in OnPush / what not?

- setInterval is not triggering cd, observale.subscribe, promise.then
- 

- async - triggers cd
- input
- Events
- ChangeDetectorRef




## summary

something async happens
