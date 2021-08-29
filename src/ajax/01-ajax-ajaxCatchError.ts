/*


const url ='https://api.github.com/users?per_page=5'


const fetchPromesa = fetch(url);


fetchPromesa.then( resp=> resp.json().then( console.log)).catch()*/



import {ajax} from "rxjs/ajax";
import {catchError, of, pluck} from "rxjs";



const url ='https://api.github.com/users?per_page=5'
ajax(url).pipe(
    pluck('response'),
    catchError(err=>{
        console.warn('error en: ',err);
        return of([]);
    })
).subscribe( console.log)

const url2 ='https://httpbin.org/delay/1'

const obs$ = ajax.getJSON(url2);

obs$.subscribe(console.log)
