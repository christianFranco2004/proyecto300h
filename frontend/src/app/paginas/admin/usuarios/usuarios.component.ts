import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-usuarios',
  imports: [RouterLink],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {
  users = [
    { name: 'Sebastian Cardona', email: 'juan.perez@email.com' },
    { name: 'María López', email: 'maria.lopez@email.com' },
    { name: 'Carlos Gómez', email: 'carlos.gomez@email.com' }
  ];
}

