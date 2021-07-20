/**

Promise example

-------------o------|---->
-----------------X----->


setTimeout


1. Pending
2. P -----> Resolved/Fulffiled
2. P -----> Rejected

 */
 
 
 /**
  * 
  
  
  class Promise {
	  constructor(cb) {
		  cb()
	  }
  }
  
  */
 
 const timerPromise = new Promise((resolve, reject) => {
	console.log('promise async callback');
	 
	setTimeout(() => {
		resolve('hello world');
		
		// resolve('something');
		
		// reject(new Error())
	}, 1000)
	 
 })
 
 
function sayHello(arg: number) {
	
}

sayHello( Math.random() )
 
// timerPromise.then((msg) => {
// 	console.log(msg);
// })

// timerPromise.then((msg) => {
// 	console.log(msg);
// })

// function sendRequestToServer() {
// 	if (true) {
		
// 	}
// 	console.log('hello world');
	
// 	try {
// 		// ... this code can fail
// 	} catch(err) {
// 		// send the log to kibhana
// 		throw err;
// 	}
	
// }

// try {
// 	sendRequestToServer()
// } catch(err) {
	
// }
