import {interval, reduce, take} from "rxjs";

const totalReducer =(acumulador,valorActual)=> acumulador +valorActual

interval(1000).pipe(
    take(3),
    reduce(totalReducer)
).subscribe({
    next: value => console.log('Next', value),
    complete: ()=> console.log('Complete')
})