import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styles: [`
  .logo{
    height: 25px;
    width: 25px;
  }
  .paginas{
   padding-left: 5rem;
  }
  .fotoPrin{
    max-height: 500px;
    max-width: 500px;
  }
  .texto{
  font-size: 13px;
  }
  .mateo{
    max-height: 700px;
  }
  h1{
    font-size: 25px;
  }
  button{
    border-radius: 0px;
  }
  `]
})
export class PrincipalComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {

  }

}
