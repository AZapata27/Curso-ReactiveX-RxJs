import {concat, fromEvent, merge, pluck} from "rxjs";

const keyup$ = fromEvent(document,'keyup');
const click$ = fromEvent(document,'click');


concat( keyup$.pipe(pluck('type')),
    click$.pipe(pluck('type'))

).subscribe({
    next: val => console.log('Next: ', val),
    complete: () => console.log('Complete')
})

