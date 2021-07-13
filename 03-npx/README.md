# NPX

Node Package Executer

if a package has a cli command npx job is to execute that command.

- ships with Node.js

- Global
- Local


npx will first search for a command locally inside the `node_modules` folder

if i did not find `node_modules`

search for a library called `ng`


```
> npx @angular/cli new some-project
> npx ng serve
```

