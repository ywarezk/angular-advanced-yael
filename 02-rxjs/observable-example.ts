

/**


---o----o----o---------->

setInterval(() => {
	console.log('this will be called every second')
}, 1000);


 */
 
import { Observable } from 'rxjs';

const intervalObservable = new Observable((observer) => {
	
	setInterval(() => {
		// resolve can only be called once
		// next can be called infinite amount of times
		observer.next('hello world');
		
		// observer.error(new Error('something happened'));
	}, 1000);
	
});

intervalObservable.subscribe((msg) => {
	console.log(msg);
})