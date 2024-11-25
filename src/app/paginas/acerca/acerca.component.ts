import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../servicios/productos.service';

@Component({
  selector: 'app-acerca',
  standalone: true,
  imports: [],
  templateUrl: './acerca.component.html',
  styleUrl: './acerca.component.scss'
})
export class AcercaComponent implements OnInit{
  constructor(private productosService : ProductosService){

  }
  ngOnInit(): void {
    this.productosService.obtenerProductos().subscribe(
      data => console.log(data),
      error => console.log("HAY UN ERROR"),
      () => console.log("Proceso terminado")
    ) 
  }
}
