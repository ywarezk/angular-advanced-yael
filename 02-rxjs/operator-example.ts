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
 
import { interval, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

// 0..1..2..3
const intervalObs$: Observable<number> = interval(1000);

intervalObs$.pipe(
	filter((counter: number) => counter % 2 === 0),
	map((counter: number) => {
		return `hello world ${counter}`
	}),
	
)

