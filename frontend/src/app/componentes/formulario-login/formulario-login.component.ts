import { Component } from '@angular/core';
import {ReactiveFormsModule, FormControl, FormGroup} from '@angular/forms';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-formulario-login',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './formulario-login.component.html',
  styleUrl: './formulario-login.component.css'
})
export class FormularioLoginComponent {
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
