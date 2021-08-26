import {from, reduce, scan, take} from "rxjs";

const totalReducer =(acumulador,valorActual)=> acumulador+valorActual;
const numeros=[1,2,3,4,5,6]

from(numeros).pipe(
    reduce(totalReducer)
).subscribe({
    next: value => console.log('Next', value),
    complete: ()=> console.log('Complete')
})



from(numeros).pipe(
    scan(totalReducer)
).subscribe({
    next: value => console.log('Next', value),
    complete: ()=> console.log('Complete')
})

//REDUX

interface Usuario{
    id?: string;
    autenticado?: boolean;
    token?: string;
    edad?: number;
}