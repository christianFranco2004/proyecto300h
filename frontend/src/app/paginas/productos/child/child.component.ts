import { Component } from '@angular/core';
import { NavBarComponent } from '../../../componentes/nav-bar/nav-bar.component';
import { TarjetaProductoComponent } from '../../../componentes/tarjeta-producto/tarjeta-producto.component';

@Component({
  selector: 'app-child',
  imports: [NavBarComponent, TarjetaProductoComponent],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

}
