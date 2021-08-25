import {interval, Observable, Observer} from "rxjs";


const observer: Observer<number> = {
    next: value => console.log('next: ',value),
    error: error =>  console.warn('error: ', error),
    complete: () => console.info('Completado')
};

const intervalo$ = new Observable<number>( subscriber => {

    let count = 0;

    const interval= setInterval( ()=>{
        count++;
        subscriber.next(count)

    },1000);

    setInterval(()=>{
        subscriber.complete();
    },3000)

    return ()=>{
        clearInterval(interval);
        console.log('Intervalo destruido')
    }

});


const subscription1 = intervalo$.subscribe( observer);
const subscription2 = intervalo$.subscribe( observer);
const subscription3 = intervalo$.subscribe( observer);

subscription1.add(subscription2);
subscription1.add(subscription3);

setTimeout(()=>{
    subscription1.unsubscribe();
},3000);