import {of} from "rxjs";


const obs$ = of<number[]>(...[1,2,3,4,5]);

obs$.subscribe({
    next: (value) => { console.log('next', value) },
    error: () => { null },
    complete: () => console.log('terminamos la secuencia')
});

