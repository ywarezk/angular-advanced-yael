"use strict";
/**


---o----o----o---------->

setInterval(() => {
    console.log('this will be called every second')
}, 1000);


 */
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var intervalObservable = new rxjs_1.Observable(function (observer) {
    setInterval(function () {
        // resolve can only be called once
        // next can be called infinite amount of times
        observer.next('hello world');
        // observer.error(new Error('something happened'));
    }, 1000);
});
intervalObservable.subscribe(function (msg) {
    console.log(msg);
});
//# sourceMappingURL=observable-example.js.map