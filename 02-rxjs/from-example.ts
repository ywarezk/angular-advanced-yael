import { from, Observable } from 'rxjs'

const myArray$: Observable<string | number> = from(['hello', 'world', 1, 2]);

myArray$.subscribe((item: string | number) => {
	console.log(item);
})