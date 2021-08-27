import {asyncScheduler, debounceTime, distinct, distinctUntilChanged, fromEvent, map, pluck, throttleTime} from "rxjs";

const click$ = fromEvent(document,'click')

click$.pipe(
    throttleTime(2000, asyncScheduler,{
        leading: true,
        trailing: true

    })
).subscribe({
    next: val => console.log('Next: ', val),
    complete: () => console.log('Complete')
})


const input = document.createElement('input')
document.querySelector('body').append(input)