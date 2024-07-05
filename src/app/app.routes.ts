import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'juegos',
    loadComponent: () =>
      import('./juegos/juegos.component').then((m) => m.JuegosComponent),
  },
  {
    path: 'admin',
    loadComponent: () =>
      import('./admin/admin.component').then((m) => m.AdminComponent),
    ...canActivate(() => redirectUnauthorizedTo(['/registro'])),
  },
  {
    path: 'user',
    loadComponent: () =>
      import('./user/user.component').then((m) => m.UserComponent),
    ...canActivate(() => redirectUnauthorizedTo(['/registro'])),
  },
  { path: 'registro', component: RegistroComponent },
  { path: 'login', component: LoginComponent },
];
