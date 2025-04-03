import { RouterModule, Routes } from '@angular/router';
import { Ejercicio01Component } from './ejercicio-01/ejercicio-01.component';
import { Ejercicio02Component } from './ejercicio-02/ejercicio-02.component';
import { Ejercicio03Component } from './ejercicio-03/ejercicio-03.component';
import { Ejercicio04Component } from './ejercicio-04/ejercicio-04.component';
import { Ejercicio05Component } from './ejercicio-05/ejercicio-05.component';
import { Ejercicio06Component } from './ejercicio-06/ejercicio-06.component';
import { Ejercicio07Component } from './ejercicio-07/ejercicio-07.component';
import { Ejercicio08Component } from './ejercicio-08/ejercicio-08.component';
import { Ejercicio09Component } from './ejercicio-09/ejercicio-09.component';
import { Ejercicio10Component } from './ejercicio-10/ejercicio-10.component';
import { Ejercicio11Component } from './ejercicio-11/ejercicio-11.component';
import { Ejercicio12Component } from './ejercicio-12/ejercicio-12.component';
import { Tabla02Component } from './tabla-02/tabla-02.component';
import { Table01Component } from './table-01/table-01.component';
import { Tabla03Component } from './tabla-03/tabla-03.component';
import { Tabla04Component } from './tabla-04/tabla-04.component';
import { Grafica02Component } from './grafica-02/grafica-02.component';
import { Grafica03Component } from './grafica-03/grafica-03.component';
import { GraficaBasicaComponent } from './grafica-basica/grafica-basica.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './home/home.component';
export const routes: Routes = [  
  { path: 'home', component: HomeComponent },
  {path: 'ejercicio-01',component: Ejercicio01Component},
  {path: 'ejercicio-02',component: Ejercicio02Component},
  {path: 'ejercicio-03',component: Ejercicio03Component},
  {path: 'ejercicio-04',component: Ejercicio04Component},
  {path: 'ejercicio-05', component: Ejercicio05Component},
  {path: 'ejercicio-06',component: Ejercicio06Component},
  {path: 'ejercicio-07',component: Ejercicio07Component},
  {path: 'ejercicio-08',component: Ejercicio08Component},
  {path: 'ejercicio-09',component: Ejercicio09Component},
  {path: 'ejercicio-10',component: Ejercicio10Component},
  {path: 'ejercicio-11',component: Ejercicio11Component},
  {path: 'ejercicio-12',component: Ejercicio12Component},
  {path: 'grafica-02',component:Grafica02Component},
  {path: 'tabla-02',component:Tabla02Component},
  {path: 'table-01',component: Table01Component},
  {path: 'tabla-03',component:Tabla03Component},
  {path: 'tabla-04',component:Tabla04Component},
  {path:'grafica-basica',component:GraficaBasicaComponent},
  {path:'grafica-03',component:Grafica03Component},

  //{path: 'login',component: LoginComponent},
  { path: '', redirectTo: '/ejercicio-01', pathMatch: 'full' }
];
