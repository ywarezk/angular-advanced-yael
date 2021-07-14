

/**


---o----o----o----X---o---->

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
		try {
			//
			const error =  new Error();
			// 
		} catch(err) {
			// log kibhana
			observer.error(new Error());
		}
		
		/*
		
		*/
	}, 1000);
	
});


// error

intervalObservable.subscribe(
	{
		next: (msg) => {
			console.log()
		},
		error: (err) => {
			console.log(err);
		}
	}
)