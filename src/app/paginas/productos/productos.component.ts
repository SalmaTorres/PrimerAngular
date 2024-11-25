import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductosService } from '../../servicios/productos.service';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.scss'
})
export class ProductosComponent implements OnInit, OnDestroy{
  productos: any;
  // productos = [
  //   {nombre: "Coca Cola", precio: "12.5 BS"},
  //   {nombre: "Pepsi", precio: "7.5 Bs"},
  //   {nombre: "Coca Cola 1", precio: "12.5 BS"},
  //   {nombre: "Pepsi 1", precio: "7.5 Bs"},
  //   {nombre: "Coca Cola 2", precio: "12.5 BS"},
  //   {nombre: "Pepsi 2", precio: "7.5 Bs"},
  //   {nombre: "Coca Cola 3", precio: "12.5 BS"},
  //   {nombre: "Pepsi 3", precio: "7.5 Bs"},
  //   {nombre: "Coca Cola 4", precio: "12.5 BS"},
  //   {nombre: "Pepsi  4", precio: "7.5 Bs"}
  // ]
  constructor(private productosServide: ProductosService){
  }
  obtenerProductos(){
    this.productosServide.obtenerProductos().subscribe(
      data => this.productos= data,
      error => console.log(error),
      () => console.log('FIN')
    )
  }
  ngOnInit(): void{
    this.obtenerProductos()
  }
  ngOnDestroy(): void{
    console.log('ADIOS')
  }
}
