# Server Side Rendering

- Single Page Application
- The majority of the screens of the app is drawn with Javascript
- By default - All the screen is drawn with javascript. (our HTML is empty - no SSR)

- your javascript file will be larger than > 2MB

# Problems with SPA

## Initial loading time

- time the user waits until he sees **Largest Contentful Paint**

In some sites if the LCP takes more than 3 sec you lose more than 50% of the users.

## SEO - Search Engine Optimization

- Google considers loading time as one of his grade parameters
- Users that bounce google will punish you
- how much time the bot took to index the site
- bot fails to run javascript - even if it runs on regular browsers

Poor SEO on SPA sites

## Isomoprhic/Universal javascript code

- harder to write
- we cannot use browser api
- and if we do use browser api - we need to not use it in Node.js
- if we are using libraries that use browser api - to place an if in node.js

## angular is isomorphic

- when running angular component in the browser we see a screen
- when running angular component in Node we get HTML.

## Initial load with full HTML 

```SPA
<body>
  <app-root></app-root>
</body>
```

```SPA with SSR
<body>
  <app-root>
    <div>
      <h1>...</h1>
      ...
    </div>
  </app-root>
</body>
```

## What is Server Side Rendering?

the result of our app

- Node.js server - index.html
- Static files (like before SSR)

The node.js responsibility is creating the entry point.


browser                                   Node.js

                Request
------------------------------------------->

                Full Html of our app
<-------------------------------------------

            User sees a screen
            
  Many requests to load other resources - 12 sec on 3g connection
--------------------------------------------> Node.js


## SSR link to docs

https://angular.io/guide/universal


## to add SSR to my angular app

```
> npx ng add @nguniversal/express-engine
```

## Modules

Node.js
AppServerModule  ---> AppModule

Browser
AppModule

## Commands

instead of

```
> npx ng serve
```

you use for development:

```
> npm run dev:ssr
```

## Prerender

```
> npm run build:ssr
```

## Prerender + client rendered

```
<html>
  <body>
    <h1>Yariv Katz</h1>
    <div>
      same html for the entire page
    </div>
  </body>
</html>
```
