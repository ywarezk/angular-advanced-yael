import { of } from 'rxjs';

const myObs = of(42);
myObs.subscribe((num) => {
	console.log(num);
})