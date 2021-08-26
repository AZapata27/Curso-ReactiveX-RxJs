import {filter, fromEvent, map, mapTo, of, range} from "rxjs";


const src1$ = range(1,10);

const pares$ = src1$.pipe(
    filter( (value,i) => {
        console.log('index: ',i)
        return value%2===1
    })
);

//pares$.subscribe(console.log)
interface Personaje{
    tipo: string,
    nombre: string

}
const personajes: Personaje[] =[{
    tipo:'heroe',
    nombre:'Batman'
},
    {
        tipo:'heroe',
        nombre:'Robin'
    },
    {
        tipo:'villano',
        nombre:'Joker'
    }]

const src2$ = of(...personajes);

src2$.pipe(
    filter<Personaje>( ({tipo})=> tipo!=='heroe')
).subscribe(console.log);



const keyup$= fromEvent<KeyboardEvent>(document,'keyup')
    .pipe(
        map( ({code})=> code),
        filter(key => key ==='Enter')
    );

keyup$.subscribe(console.log)

