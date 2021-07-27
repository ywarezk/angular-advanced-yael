"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
// ---0----1-----2----3-->
var tik$ = rxjs_1.interval(1000);
//מקבל זמן להמתנה , מחזיר את הערך האחרון שהתקבל מהמקור  
// --
var debounceTime_tik$ = tik$.pipe(rxjs_1.debounceTime(500));
var tiks_sub = debounceTime_tik$.subscribe(function (item) {
    console.log("sec:" + item % 60); //print sec for clock
    if (item >= 65)
        tiks_sub.unsubscribe();
});
// why does this code doesn't print anything
//# sourceMappingURL=debounce-time.js.map