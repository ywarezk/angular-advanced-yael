# Stuff to install

- Node.js > 14
- VSCode

## stuff you do not need

- typescript installed globally
- @angular/cli doesn't have to be globally installed

```
> npx @angular/cli new some-project
> npx ng serve
```

## open a new project with angular cli

```
> npx @angular/cli new what-is-changed
```

to build the project in development

```
> npx ng build --configuration=development
```

## V9 - Ivy Renderer

compiler and render engine

V8 - View Engine - deprecated

```
npx ng update
```

- bundle smaller - 15% - 30%
1MB - 850KB

- npx ng serve


- JIT - Just in Time - browser to compile our code
- AOT - We are building the code at build time
