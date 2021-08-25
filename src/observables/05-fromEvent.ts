import {fromEvent} from "rxjs";


const src1$ = fromEvent<MouseEvent>(document, 'click');
const src2$ = fromEvent<KeyboardEvent>(document, 'keyup');



const observer = {
    next: val => console.log('Next: ',val)
}


src1$.subscribe( ({x,y})=> {

    console.log(x,y);

});
src2$.subscribe(({key})=>{
    console.log(key);
});