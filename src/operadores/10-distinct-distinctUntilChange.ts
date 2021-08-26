import {distinct, distinctUntilChanged, from, of} from "rxjs";

const numeros$ = of(1, 2, 1, 3, 3, 4, 5, 4, 6, 6, 7, 3, 5, 7);

numeros$.pipe(
    distinct()
).subscribe(
    {
        next: val => console.log('Next: ', val),
        complete: () => console.log('Complete')
    }
)

const src1$ = of(1, 2, 1, 3, 3, 4, 5, 4, 6, 6, 7, 3, 5, 7);

src1$.pipe(
    distinctUntilChanged()
).subscribe(
    {
        next: val => console.log('Next: ', val),
        complete: () => console.log('Complete')
    }
)
const personajes = [{
    nombre: 'megaman'
}, {
    nombre: 'x'
}, {
    nombre: 'dr dom'
}, {
    nombre: 'megaman'
}, {
    nombre: 'zero'
}, {
    nombre: 'dr dom'
},]

const src2$ = from(personajes)
    .pipe(
        distinct(obj => obj.nombre)
    )
    .subscribe({
        next: val => console.log('Next: ', val),
        complete: () => console.log('Complete')
    })


const personajes2 = [{
    nombre: 'megaman'
}, {
    nombre: 'x'
}, {
    nombre: 'dr dom'
}, {
    nombre: 'megaman'
}, {
    nombre: 'zero'
}, {
    nombre: 'zero'
}, {
    nombre: 'dr dom'
}, {
    nombre: 'dr dom'
},]

const src3$ = from(personajes2)
    .pipe(
        distinctUntilChanged((anterior,actual)=> anterior.nombre === actual.nombre)
    )
    .subscribe({
        next: val => console.log('Next: ', val),
        complete: () => console.log('Complete')
    })