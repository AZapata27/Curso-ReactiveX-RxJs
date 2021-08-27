import {debounceTime, distinctUntilChanged, fromEvent, map, pluck, sample, sampleTime,} from "rxjs";

const click$ = fromEvent<MouseEvent>(document,'click')

click$.pipe(
    map(({ x,y})=>({x,y})),
    sampleTime(1000)
).subscribe({
    next: val => console.log('Next: ', val),
    complete: () => console.log('Complete')
})


const input = document.createElement('input')
document.querySelector('body').append(input)

const input$ = fromEvent<KeyboardEvent>(input,'keyup');

input$.pipe(
    pluck('target','value'),
    distinctUntilChanged(),
    sample(click$),
).subscribe({
    next: val => console.log('Next: ', val),
    complete: () => console.log('Complete')
})