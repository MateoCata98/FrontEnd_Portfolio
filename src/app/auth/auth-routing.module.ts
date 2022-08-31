import { NgModule  } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { RegisterComponent } from './register/register.component';



const rutas : Routes = [
    {
      path:'',
      component: MainComponent,
      children:[
        {
          path:'login',
          component: LoginComponent
         },
         {
          path:'registro',
          component: RegisterComponent
         },
         {
          path:'**',
          redirectTo: 'login'
         }
      ]
    }
  ];



@NgModule({
    declarations: [],
    imports: [
      RouterModule.forChild ( rutas )
    ],
    exports: [
      RouterModule
    ]
  })
  export class AuthRoutingModule { }
  