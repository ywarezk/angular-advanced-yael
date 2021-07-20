"use strict";
/**


---o----o----o----|-------->

---o----o----o------------>

---o----o----o----X-------->

---o----o----o----X-------->

setInterval(() => {
    console.log('this will be called every second')
}, 1000);


 */
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var intervalObservable = new rxjs_1.Observable(function (observer) {
    console.log('async callback is running');
    var counter = 0;
    var intervalId = setInterval(function () {
        counter++;
        // resolve can only be called once
        // next can be called infinite amount of times
        observer.next('hello world');
        if (counter === 3) {
            observer.complete();
        }
    }, 1000);
    return function () {
        clearInterval(intervalId);
    };
});
// 1. Promise VS Observable
// Promise can be resolved once
// observable can be resolved multiple times
var sub = intervalObservable.subscribe({
    next: function (msg) {
        // console.log()
    },
    error: function (err) {
        // console.log(err);
    }
});
sub.unsubscribe();
intervalObservable.subscribe({
    next: function (msg) {
        // console.log()
    },
    error: function (err) {
        // console.log(err);
    }
});
// 2. Promise VS Observable
// promise will call the async callback immediatly regardless to the amount of listeners
// Observable will not call the async callback (lazy) will call multiple times for every listener
//# sourceMappingURL=observable-example.js.map