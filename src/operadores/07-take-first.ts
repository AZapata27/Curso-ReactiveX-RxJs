import {first, fromEvent, map, of, take, tap} from "rxjs";


const numeros$ = of(1,2,3,4,5);


numeros$.pipe(
    take(4)
)
    .subscribe({
        next: val => console.log('Next: ', val),
        complete: ()=> console.log('Complete')
    })


const click$ = fromEvent<MouseEvent>(document,'click');


click$.pipe(
    tap<MouseEvent>(console.log),
    map( ({clientY,clientX}) => ({clientY,clientX })),
    first( event => event.clientY >= 150)
)
    .subscribe({
        next: val => console.log('Next: ', val),
        complete: ()=> console.log('Complete')
    })