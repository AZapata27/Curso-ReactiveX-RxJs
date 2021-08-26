import {fromEvent, map, tap} from "rxjs";

const texto = document.createElement('div');

texto.innerHTML=`
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consectetur, leo sit amet scelerisque imperdiet, nisi nisi commodo arcu, ut aliquam ante ipsum vitae mi. Etiam sit amet nisl quis lorem mattis interdum. Curabitur eget nunc porta, fringilla sapien vitae, commodo magna. Aenean risus ipsum, molestie suscipit rutrum eget, efficitur nec nisi. Nulla facilisi. Curabitur venenatis, urna volutpat aliquam blandit, lectus leo egestas urna, ut tincidunt mauris neque suscipit tortor. Praesent vitae accumsan risus. Praesent sit amet convallis erat. Sed vestibulum, ex non blandit pulvinar, mauris sem pretium sem, in lobortis justo ligula ut neque.
 <br/><br/>
Pellentesque vel dui laoreet, elementum leo ac, semper nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque tincidunt fringilla sodales. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur at sagittis urna. Donec non odio sed ante suscipit facilisis. Morbi ligula mi, vulputate sit amet viverra sed, elementum finibus lacus. Vivamus non turpis ornare, commodo augue nec, tempor diam. Vestibulum est lectus, malesuada sed semper sed, facilisis in turpis. Nulla faucibus leo eu eros blandit, ac bibendum mi rutrum. Morbi volutpat sapien ut sollicitudin varius. Suspendisse venenatis accumsan vestibulum.
<br/><br/>
Duis molestie, erat ac rutrum gravida, ex diam varius eros, et consectetur tellus magna sed elit. Curabitur lacinia leo nec diam posuere, finibus iaculis libero bibendum. Maecenas euismod iaculis ipsum quis convallis. Vestibulum vel dignissim nibh. Etiam sagittis arcu a orci congue elementum. Sed arcu leo, fringilla eu pretium sed, tempor vel purus. Aenean vitae lorem purus. Fusce at maximus lectus, in feugiat erat. Etiam feugiat justo in efficitur dignissim. Nullam suscipit elit quis ipsum gravida lobortis. Suspendisse vel velit in erat tristique tempus vel nec ipsum. Suspendisse ac odio magna. Vivamus semper enim non augue consequat, sit amet tristique lectus cursus.
<br/><br/>
Vivamus et scelerisque purus. Sed congue ultricies diam, sit amet tristique libero consectetur quis. Donec vehicula ante lorem. Pellentesque laoreet malesuada dictum. Suspendisse tempus a sapien eu consequat. In magna nunc, egestas non diam eget, tempus pulvinar justo. Etiam suscipit sem diam. Sed et sagittis diam. Vestibulum pharetra placerat scelerisque. Mauris rhoncus urna sed lorem maximus feugiat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sem dui, ultricies ut rhoncus quis, luctus ut tortor.
<br/><br/>
Etiam facilisis mi non neque hendrerit, ut facilisis nunc suscipit. Phasellus ut felis ut lacus luctus consectetur. Vivamus sodales mi et nunc condimentum, ac commodo ex consectetur. Nulla accumsan suscipit massa sit amet hendrerit. Nulla sed neque nec lorem dapibus venenatis. Fusce varius lorem quis turpis tempus, vitae convallis mauris porttitor. Curabitur feugiat, ipsum ullamcorper dictum ultricies, mi elit faucibus felis, at pharetra nibh erat in arcu. Nulla facilisi.
`;

const body = document.querySelector('body');
body.append(texto);

const progressBar = document.createElement('div');
progressBar.setAttribute('class','progress-bar');
body.append(progressBar);

//funcion que haga el calculo
const calcularPorcentajeScroll =(event)=>{

    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;

    return (scrollTop/(scrollHeight-clientHeight))*100;
}

//Streams
const scroll$ = fromEvent(document,'scroll')

const progress$ = scroll$.pipe(
    map( calcularPorcentajeScroll ),
    tap(console.log)
)

progress$.subscribe( porcentaje=>{
    progressBar.style.width= `${porcentaje}%`
})