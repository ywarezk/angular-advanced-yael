# Angular Cli

Going over some advanced features of angular cli

We want best practices for very big projects

## Start a new project with angular cli

```bash
> npx @angular/cli new my-big-project --create-application=false
```

https://some-backend.com/api/

https://my-frontend.com

https://my-frontend.com/api

## Workspace

- multiple web sites
- multiple library

## add application

```bash
> npx ng g application <name-of-app>
```

## serve application

```bash
> npx ng serve <name-of-app>
```

## seperate your project to modules

- data
- routes
  /settings/user
  /settings/dashboard

## Library

angular tools that are common in many angular projects.

```
> npx ng g library @yeal/<name-of-library>
```

tsconfig.json -> `paths`

package.json -> version -> ++

```
> npx ng build @yael/some-library
> cd dist/yael/some-library
> npm get registry # https://npm.nerdeez.com
> npm get registry # https://registry.npmjs.com
> npm set registry https://npm.nerdeez.com
> npm login
> npm publish
```

if im a site that wants to update

```
> npm install @yael/some-library
> npm install @yael/some-library@latest
```

## EX.

- open a new workspace project using @angular/cli
- create a new library 
- build the library
- open an account in https://www.npmjs.com/
- npm login
- npm publish
- npm install hello




