"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var myArray$ = rxjs_1.from(['hello', 'world', 1, 2]);
myArray$.subscribe(function (item) {
    console.log(item);
});
//# sourceMappingURL=from-example.js.map