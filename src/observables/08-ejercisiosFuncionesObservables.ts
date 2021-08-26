import {of , from} from "rxjs";


const observer= {
    next: val => console.log('Next:', val),
    error: err => console.log('Error: ', err),
    complete: ()=> console.log('Complete')
};


const source$ = from([1,2,3,4,5,6]);

const source2$ = from(fetch('https://api.github.com/users/azapata27'));

// source2$.subscribe(observer);

source2$.subscribe(async (resp)=>{

    console.log(resp);

    const dataRsp = await resp.json();

    console.log(dataRsp);

})

