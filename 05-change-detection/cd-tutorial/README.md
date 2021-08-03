
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
