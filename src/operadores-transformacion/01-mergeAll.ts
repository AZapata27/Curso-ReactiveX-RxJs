import {debounceTime, filter, fromEvent, map, mergeAll, mergeMap, Observable, pluck} from "rxjs";
import {ajax, AjaxResponse} from "rxjs/ajax";
import {GithubUser, GitHubUsersResp} from "../interfaces/GitHubUser.Interface";


const body = document.querySelector('body');

const textInput = document.createElement('input')
const orderList = document.createElement('ol')
body.append(textInput,orderList);

//Helpers

const mostrarUsuarios = (usuarios: GithubUser[]) =>{

    orderList.innerHTML ='';
    console.log(usuarios)
    usuarios.forEach( usuario=>{
        const li = document.createElement('li');
        const img = document.createElement('img')
        img.src = usuario.avatar_url;
        const anchor = document.createElement('a');
        anchor.href = usuario.html_url;
        anchor.text ='Ver pagina';
        anchor.target ='_blank';
        li.append(img)
        li.append(usuario.login + ' ');
        li.append(anchor);

        orderList.append(li);
    })
}



//Streams
const input$ = fromEvent<KeyboardEvent>(textInput,'keyup');

input$.pipe(
    debounceTime<KeyboardEvent>(500),
    map<KeyboardEvent, string>(evento => evento.target['value']),
    mergeMap<string, Observable<GitHubUsersResp>>(texto => ajax.getJSON(`https://api.github.com/search/users?q=${texto}`)),
    map<GitHubUsersResp, GithubUser[]>(resp => resp.items)
).subscribe( mostrarUsuarios );
