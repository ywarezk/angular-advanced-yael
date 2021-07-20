"use strict";
/**

operator

----o-----o-----o----o------->

----D-----D-----D----D------->

---------------------D------->


operators are functions.

1. creating operators

(...arg) => Observable<any>

2. Tranforming operators

(...args, oldObservable) => newObservable


const newObservable = new Observable((observer) => {
    
    const sub = oldObservable.subscribe(() => {
        
    })
    
    return () => {
        sub.unsubscribe()
    }
    
})

 */
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
// 0..1..2..3
var intervalObs$ = rxjs_1.interval(1000);
intervalObs$.pipe(operators_1.filter(function (counter) { return counter % 2 === 0; }), operators_1.map(function (counter) {
    return "hello world " + counter;
}));
//# sourceMappingURL=operator-example.js.map