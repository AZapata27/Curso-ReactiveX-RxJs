import {first, fromEvent, map, of, take, takeWhile, tap} from "rxjs";


const numeros$ = of(1,2,3,4,5,6,7,8,9,10);


numeros$.pipe(
    takeWhile( val => val < 5)
)
    .subscribe({
        next: val => console.log('Next: ', val),
        complete: ()=> console.log('Complete')
    })


const click$ = fromEvent<MouseEvent>(document,'click');


click$.pipe(
    map( ({x,y})=> ({x,y})),
    takeWhile( val => val.y <= 150, true)
).subscribe({
    next: val => console.log('Next: ', val),
    complete: ()=> console.log('Complete')
})