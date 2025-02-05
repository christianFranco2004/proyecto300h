import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { Productos } from '../../../interfaces/productos';
import { ProductosService } from '../../../services/productos.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inventarios',
  imports: [FormsModule],
  templateUrl: './inventarios.component.html',
  styleUrl: './inventarios.component.css'
})
export class InventariosComponent {

  _dataService = inject(ProductosService);

  allproducts: Productos[] = [];

  name: string = '';
  price: number = 0;
  image: string = '';
  tallas: string = '';
  showdiv: boolean = false;
  // editMode: boolean = false;
  // editProductId: string | undefined | null = null;



  obtenerDatos() {
    this._dataService.getProducto().subscribe({
      next: (res: any) => {
        console.log('res', res);
        this.allproducts = res;
      },
      error: (err) => {
        console.error('Hay un error', err);
      }
    });
  }

  crearDatos() {
    if (this.name === '' || this.image === '' || this.price === 0) {
      alert('Ponga todos los campos');
    } else {
      const nuevoProducto: Productos = {
        name: this.name,
        Image: this.image,
        price: this.price,
        tallas: this.tallas
      };
      this._dataService.getProducto().subscribe({
        next: (res: any) => {
          if (res) {
            console.log('res', res);
            this.obtenerDatos();
          } else {
            console.error('Hay un error');
          }
        },
        error: (err) => {
          console.error('Hay un error', err);
        }
      });
    }
  }

  // identificarId(id: string | undefined) {
  //   this.editProductId = id;
  //   this.editMode = true;
  //   this.showdiv = true;
  //   console.log(this.editProductId);
  // }

  // modificarProducto() {
  //   console.log('Entre');
  //   console.log(this.editProductId, this.name, this.image, this.price);
  //   if (!this.name || !this.image || this.price <= 0) {
  //     alert('Ingrese todos los campos');
  //   } else if (this.editProductId) {
  //     const productoActualizado: Productos = {
  //       name: this.name,
  //       Image: this.image,
  //       price: this.price,
  //       tallas: this.tallas
  //     };
  //     this._dataService.putProducto(this.editProductId, productoActualizado).subscribe({
  //       next: (res: any) => {
  //         if (res) {
  //           console.log('res', res);
  //           this.obtenerDatos();
  //         } else {
  //           console.error('Hubo un error');
  //         }
  //       },
  //       error: (err) => {
  //         console.error('Hubo un error', err);
  //       }
  //     });
  //   }
  // }

  // borrarProducto(id: string | undefined) {
  //   console.log('Producto que se borrara:', id);

  //   this._dataService.deleteProduct(id).subscribe({

  //   })
  // }

}







