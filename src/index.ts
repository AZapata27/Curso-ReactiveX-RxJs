import {interval, mergeMap, of} from "rxjs";

const letras$= of('a','b','c','d')

letras$.pipe(

    mergeMap((letra)=> interval(1000))

).subscribe({
    next: val => console.log('Next: ', val),
    complete: () => console.log('Complete')
})
