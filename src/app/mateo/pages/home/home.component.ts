import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from '../../../auth/services/autenticacion.service';
import { Usuario } from '../../../auth/interfaces/jwt-dto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
    .iconos{
      color: rgb(113, 128, 173);
    }
    .inicio{
      font-size: 15px;
    }
    img {
    height: 47px
    }
    `]
})
export class HomeComponent {

  get usuario(){
    return this.autenticacionService.usuario;
  }

  constructor( private router: Router,
               private autenticacionService: AutenticacionService) { }

 logout(){
   this.router.navigateByUrl('/auth');
   this.autenticacionService.logout();
 }
}
