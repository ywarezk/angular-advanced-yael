/**

Javascript/Typescript code that runs on Node.js and on the Browser

 */

// non universal code
// cause window only exists in the browser

if (typeof location !== 'undefined') {
  location.href = 'https://google.com';
} else {
  console.log('there is no location');
}

// shim
// polyfill

// shim

/*
global.location = {
  href: ''
}
*/

/**

<some-component-that-can-only-run-on-browser>

 */

