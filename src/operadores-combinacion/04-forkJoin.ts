import {catchError, delay, forkJoin, interval, of, take} from "rxjs";
import {ajax} from "rxjs/ajax";

const numeros$ = of(1,2,3,4,5);
const intervalo$ = interval(1000).pipe( take(3));
const letras$ = of('a','b','c','d').pipe(delay(3500));


forkJoin({numeros$ , intervalo$, letras$}).subscribe({
    next: val => console.log('Next: ', val),
    complete: () => console.log('Complete')
})

const GITHUB_API_URL = 'https://api.github.com/users';
const GITHUB_USER ='Azapata27'

forkJoin(
    {
        usuario: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}`),
        repos: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}/repos`),
        gists: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}/gists`),
    }
).pipe(
    catchError(err => of(err.message))
).subscribe(console.log)
