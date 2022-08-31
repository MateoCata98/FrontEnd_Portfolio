import { Component } from "@angular/core";



@Component({
    selector: 'app-proyectos',
    templateUrl: './proyectos.component.html',
    styles:[`
    .texto{
        font-size: auto;
    }
    .center {
        align-items: center;  
        justify-content: center; 
    }
    .guarda{
        max-width: 300px;
    }
    .imagen{
        min-height: 200px;
        max-height: 250px;
        width: auto;
        min-width: 280px;
    }
    .div-imagen {
    display:inline-block;
    position:relative;
    box-shadow: 2px 5px 15px #000000;
    }

    .div-imagen > div {
     height: auto;
    background-color: rgb(82, 94, 131);
    position:absolute;
    top:0;
    left:0;
    z-index:-1;
    padding:10px;
    margin:0;
    }
    .desvanecer:hover {
    opacity: 0.01;
    -webkit-transition: opacity 500ms;
    -moz-transition: opacity 500ms;
    -o-transition: opacity 500ms;
    -ms-transition: opacity 500ms;
    transition: opacity 500ms;
    }
`]
})
export class ProyectosComponent{

}