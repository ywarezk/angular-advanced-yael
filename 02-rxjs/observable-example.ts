

/**


---o----o----o----|-------->

---o----o----o------------>

---o----o----o----X-------->

---o----o----o----X-------->

setInterval(() => {
	console.log('this will be called every second')
}, 1000);


 */
 
import { Observable, Subscription } from 'rxjs';

const intervalObservable = new Observable((observer) => {
	console.log('async callback is running');
	let counter = 0;
	
	const intervalId = setInterval(() => {
		counter++;
		// resolve can only be called once
		// next can be called infinite amount of times
		observer.next('hello world');	
		
		if (counter === 3) {
			observer.complete()
		}
		
		
	}, 1000);
	
	return () => {
		clearInterval(intervalId)
	}
	
});


// 1. Promise VS Observable

// Promise can be resolved once
// observable can be resolved multiple times

const sub: Subscription = intervalObservable.subscribe(
	{
		next: (msg) => {
			// console.log()
		},
		error: (err) => {
			// console.log(err);
		}
	}
)

sub.unsubscribe()

intervalObservable.subscribe(
	{
		next: (msg) => {
			// console.log()
		},
		error: (err) => {
			// console.log(err);
		}
	}
)

// 2. Promise VS Observable
// promise will call the async callback immediatly regardless to the amount of listeners
// Observable will not call the async callback (lazy) will call multiple times for every listener
