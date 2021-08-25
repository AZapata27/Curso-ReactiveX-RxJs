import {Observable, Observer} from "rxjs";


const observer: Observer<string> = {
    next: value => console.log('next: ',value),
    error: error =>  console.warn('error: ', error),
    complete: () => console.info('Completado')
};

const observable$ = new Observable<string>(
    subscriber => {
        subscriber.next('Hola');
        subscriber.next('Mundo');

        subscriber.error('hubo un error');

        subscriber.complete();

    }
);


observable$.subscribe( observer);

