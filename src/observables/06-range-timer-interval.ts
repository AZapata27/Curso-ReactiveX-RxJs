import {interval, Observer, of, range, timer} from "rxjs";


const src$ = range(5,20);

src$.subscribe(console.log);


const observer: Observer<number> = {
    next: value => console.log('next: ',value),
    error: error =>  console.warn('error: ', error),
    complete: () => console.info('Completado')
};

const interval$ = interval(1000);
const timer$= timer(2000);

//interval$.subscribe(observer);

timer$.subscribe(observer);