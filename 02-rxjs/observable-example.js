"use strict";
/**


---o----o----o----X---o---->

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
        try {
            //
            var error = new Error();
            // 
        }
        catch (err) {
            // log kibhana
            observer.error(new Error());
        }
        /*
        
        */
    }, 1000);
});
// error
intervalObservable.subscribe({
    next: function (msg) {
        console.log();
    },
    error: function (err) {
        console.log(err);
    }
});
//# sourceMappingURL=observable-example.js.map