import { RouterModule, Routes } from '@angular/router';
import { Ejercicio01Component } from './ejercicio-01/ejercicio-01.component';
import { Ejercicio02Component } from './ejercicio-02/ejercicio-02.component';
import { Ejercicio03Component } from './ejercicio-03/ejercicio-03.component';
import { Ejercicio04Component } from './ejercicio-04/ejercicio-04.component';
import { Ejercicio05Component } from './ejercicio-05/ejercicio-05.component';
import { Ejercicio06Component } from './ejercicio-06/ejercicio-06.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
export const routes: Routes = [  
  {path: 'ejercicio-01',component: Ejercicio01Component},
  {path: 'ejercicio-02',component: Ejercicio02Component},
  {path: 'ejercicio-03',component: Ejercicio03Component},
  {path: 'ejercicio-04',component: Ejercicio04Component},
  {path: 'ejercicio-05', component: Ejercicio05Component},
  {path: 'ejercicio-06',component: Ejercicio06Component},
  {path: 'login',component: LoginComponent},
  { path: '', redirectTo: '/ejercicio-01', pathMatch: 'full' }
];
