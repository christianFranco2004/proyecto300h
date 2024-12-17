import { Component } from '@angular/core';
import { NavBarComponent } from '../../../componentes/nav-bar/nav-bar.component';

@Component({
  selector: 'app-child',
  imports: [NavBarComponent],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

}
