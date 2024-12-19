import { Component } from '@angular/core';
import {ReactiveFormsModule, FormControl, FormGroup} from '@angular/forms';
import { FooterComponent } from "../../../componentes/footer/footer.component";
import { NavBarComponent } from "../../../componentes/nav-bar/nav-bar.component";

@Component({
  selector: 'app-login-usuarios',
  imports: [ReactiveFormsModule, FooterComponent, NavBarComponent],
  templateUrl: './login-usuarios.component.html',
  styleUrl: './login-usuarios.component.css'
})
export class LoginUsuariosComponent {

     formularioLogin = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
     });

     handleSubmint(){
          console.log('Esta es la informacion obtenida del input email: ' + 
            this.formularioLogin.value.email
          );
          console.log('Esta es la informacion obtenida del input password: ' +
            this.formularioLogin.value.password
          );
     }










}
