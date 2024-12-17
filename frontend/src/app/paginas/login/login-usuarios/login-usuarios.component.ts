import { Component } from '@angular/core';
import {ReactiveFormsModule, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login-usuarios',
  imports: [ReactiveFormsModule],
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
