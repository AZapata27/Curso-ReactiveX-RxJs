import {asyncScheduler} from "rxjs";


const saludar = ()=> console.log('Hola mundo');

//Timeout tipo
asyncScheduler.schedule(saludar, 3000,);


const subs = asyncScheduler.schedule(function (state){
    console.log('State:', state);
    this.schedule(state+1,1000)

},1000,0)

setTimeout(()=>{
    subs.unsubscribe();
},6000);
