/**

Async code

we usually pass a callback
and that callback is called sometime in the future

 */
 
// ---------o----------->
setTimeout(() => {
	console.log('hello world');
}, 2000);


// ---o----o----o------------->
setInterval(() => {
	console.log('this will be called every second')
}, 1000);

/**

Examples of async code in javascript

- server call
- timers
- upload file
- http
- events


Callback hell
- when you have to send something async after something async is finished
- Bad pattern


somethingAsync(() => {
	someServerRequest(() => {
		http(() => {
			
		})	
	})
})

Race - parrallel

somethingAsync(() => {})

anotherAsync(() => {})

 */
 
 /**
 
 classify your async code:
 
 ----o------o------o----|-------->
 ----o------o------o----X-------->
 
 
 
 
 Promise
 -------------o---|---->
 -----------------X----->
  */