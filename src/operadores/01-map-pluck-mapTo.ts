import {fromEvent, map, mapTo, pluck, range} from "rxjs";


const src1$ = range(1,5);

const src1pipe$= src1$.pipe(
    map<number,number>(value => value*10)
);

src1pipe$.subscribe( console.log );



const keyup$ = fromEvent<KeyboardEvent>(document,'keyup');

const keyupMap$ = keyup$.pipe(
    map<KeyboardEvent,string>(({key}) => key)
);

const keyupPluck$ = keyup$.pipe(
    pluck('target','baseURI')
);

const keyupMapTo$ = keyup$.pipe(
    mapTo('tecla prsionada')
);



//********



keyupMap$.subscribe( val=> console.log('map:', val));
keyupPluck$.subscribe( val=> console.log('pluck:', val));
keyupMapTo$.subscribe( val=> console.log('mapTo:', val));


