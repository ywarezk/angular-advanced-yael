"use strict";
/**

Promise example

-------------o------|---->
-----------------X----->


setTimeout


1. Pending
2. P -----> Resolved/Fulffiled
2. P -----> Rejected

 */
var timerPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('hello world');
        // resolve('something');
        // reject(new Error())
    }, 1000);
});
timerPromise.then(function (msg) {
    console.log(msg);
});
timerPromise.then(function (msg) {
    console.log(msg);
});
function sendRequestToServer() {
    if (true) {
    }
    console.log('hello world');
    try {
        // ... this code can fail
    }
    catch (err) {
        // send the log to kibhana
        throw err;
    }
}
try {
    sendRequestToServer();
}
catch (err) {
}
//# sourceMappingURL=promise-example.js.map