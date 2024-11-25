import { Routes } from '@angular/router';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { ProductosComponent } from './paginas/productos/productos.component';
import { InicioComponent } from './paginas/inicio/inicio.component';

export const routes: Routes = [
    {path: 'productos', component: ProductosComponent},
    {path: 'mi-contacto', component: ContactoComponent},
    {path: 'inicio', component: InicioComponent}
];
