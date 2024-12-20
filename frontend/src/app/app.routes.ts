import { Routes } from '@angular/router';

import { InicioComponent } from './paginas/inicio/inicio.component';
import { AdminComponent } from './paginas/admin/admin.component';
import { NotFoundComponent } from './paginas/not-found/not-found.component';
import { AdultsComponent } from './paginas/productos/adults/adults.component';
import { ChildComponent } from './paginas/productos/child/child.component';

//rutas hijas
import { InventariosComponent } from './paginas/admin/inventarios/inventarios.component';
import { UsuariosComponent } from './paginas/admin/usuarios/usuarios.component';
import { LoginAdminComponent } from './paginas/login/login-admin/login-admin.component';
import { LoginUsuariosComponent } from './paginas/login/login-usuarios/login-usuarios.component';

import { RegisterAdminComponent } from './paginas/registro/register-admin/register-admin.component';
import { RegisterUsuarioComponent } from './paginas/registro/register-usuario/register-usuario.component';


export const routes: Routes = [
{path: '', component: InicioComponent, title: "inicio"},

{path: 'child', component: ChildComponent, title: 'Child'},
{path: 'Adult', component: AdultsComponent, title: 'Adult'},

{path: 'administradores', component: LoginAdminComponent, title: 'inicio de sesion de administradores' },
{path: 'usuarios', component: LoginUsuariosComponent, title: 'inicio de sesion de usuarios' },

       

{path: 'admin', component: AdminComponent, title: 'administrador',
    children:[
        {path: 'inventario',component:InventariosComponent , title: 'Gestion de Inventario'},
        {path: '', component:UsuariosComponent , title: 'seguimiento de usuarios'},
        {path: 'registroAdmin', component: RegisterAdminComponent, title: 'registro de administrador' },
    ]
},

 {path: 'registroUsuario', component: RegisterUsuarioComponent, title: 'registro de usuario'},
    

{path: '**', component: NotFoundComponent, title: 'no encontrado'}
];
