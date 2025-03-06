import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
@Component({
  selector: 'app-toolbar',
  imports: [MatButtonModule,MatIconModule,MatMenuModule,MatToolbarModule],
  template:`
  <mat-toolbar color="primary" class="sticky-toolbar">
  <span class="text-x1 folt-bold">Mi plataforma</span>
  <span class="spacer"></span>
  <nav>
    <button mat-button>Ejercicios</button>
    <button mat-button>Tareas</button>
    <button mat-button>Examen Practico</button>
    <button mat-button>Acerca de </button>
  </nav>
  <span class="spacer"></span>
  <button mat-icon-button [matMenuTriggerFor]="menu">
    <img class="user-avatar" src="assets/user.jpg" alt="Usuario">
  </button>
  <mat-menu #menu="matMenu">
    <button mat-menu-item>Perfil</button>
    <button mat-menu-item>Cerrar sesion</button>
  </mat-menu>
  </mat-toolbar>
  `,
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {

}
