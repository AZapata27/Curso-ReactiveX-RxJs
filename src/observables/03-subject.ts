import {Observable, Observer, Subject} from "rxjs";


const observer: Observer<string> = {
    next: value => console.log('next: ',value),
    error: error =>  console.warn('error: ', error),
    complete: () => console.info('Completado')
};


const intervalo$ = new Observable( subs =>{

    const intervalId =  setInterval( ()=>{
        subs.next( Math.random());
    },1000);


    return ()=>clearInterval(intervalId);
});

// const subs1 = intervalo$.subscribe( rnd => console.log('subs1: ',rnd) );
// const subs2 = intervalo$.subscribe( rnd => console.log('subs2: ',rnd) );

const subject$ = new Subject();
const subscription = intervalo$.subscribe( subject$ );

const subs1 = subject$.subscribe( rnd => console.log('subs1: ',rnd) );
const subs2 = subject$.subscribe( rnd => console.log('subs2: ',rnd) );



setTimeout(()=>{
    subject$.next(10);
    subject$.complete();
    subscription.unsubscribe();
},4000);