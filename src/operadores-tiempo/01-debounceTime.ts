import {debounceTime, distinct, distinctUntilChanged, fromEvent, map, pluck} from "rxjs";

const click$ = fromEvent(document,'click')

click$.pipe(
    debounceTime(1000)
).subscribe({
    next: val => console.log('Next: ', val),
    complete: () => console.log('Complete')
})


const input = document.createElement('input')
document.querySelector('body').append(input)

const input$ = fromEvent<KeyboardEvent>(input,'keyup');

input$.pipe(
    debounceTime(1000),
    pluck('target','value'),
    distinctUntilChanged()
).subscribe({
    next: val => console.log('Next: ', val),
    complete: () => console.log('Complete')
})