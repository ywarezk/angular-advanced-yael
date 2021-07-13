# RXJS and async code in Javascript

## Create the playground

- start a project with only rxjs installed - not an angular project
- cleaning the noise
- focusing only on RXJS

```bash
> mkdir 02-rxjs
> cd 02-rxjs
> npm init --yes
> npm install typescript -D
> npm install rxjs
> npx tsc --init # created a tsconfig.json
> npx tsc -w
```


## Improve how we deal with async code




## EX.

- Create a node.js typescript playground like we did in the lesson
  - Create a new directory called `rxjs-playground`
  - cd to the directory you created and init npm with: `npm init --yes`
  - Install typescript: `npm install typescript -D`
  -  Create a `tsconfig.json` file using the command: `npx tsc --init`
  - set `sourceMap` to `true` in the `tsconfig`
  - constantly compile all the files