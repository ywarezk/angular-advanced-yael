import { debounceTime, interval, Observable, Subscription } from 'rxjs'


// ---0----1-----2----3-->
const tik$: Observable<number>= interval(1000);
//מקבל זמן להמתנה , מחזיר את הערך האחרון שהתקבל מהמקור  

// --
const debounceTime_tik$ = tik$.pipe(
	debounceTime(500)
)

const tiks_sub: Subscription =debounceTime_tik$.subscribe(
	(item:number)=>{
		console.log("sec:"+item%60)//print sec for clock
		if(item>=65)
			tiks_sub.unsubscribe();
	}
)

// why does this code doesn't print anything