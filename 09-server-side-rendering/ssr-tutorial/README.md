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
