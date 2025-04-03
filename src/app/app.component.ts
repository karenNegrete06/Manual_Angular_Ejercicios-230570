import { Component } from '@angular/core';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ContentComponent } from "./components/content/content.component";
import { PageContainerComponent } from "./components/page-container/page-container.component";
import { MatButtonModule } from '@angular/material/button';
import { LoginComponent } from './components/login/login.component';
import { CommonModule } from '@angular/common';
import { Page1Component } from "./pages/page1/page1.component";
import { PagesComponent } from "./pages/pages.component";
import { Router } from '@angular/router';
import { GraficaBasicaComponent } from "./grafica-basica/grafica-basica.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    LoginComponent,
    NavbarComponent,
    PageContainerComponent,
    MatButtonModule
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Manual_ejercicios_Angular-230570-KLNH';
  isAuthenticated: boolean = false; // Estado inicial

  constructor(private router: Router) {}
  selectedExercise: { name: string, description: string, objective: string } = { name: '', description: '', objective: '' };

  updateExercise(exercise: { name: string, description: string ,objective: string}) {
    this.selectedExercise = exercise; // 🔹 Guarda el nombre y la descripción
  }

  logout() {
    this.isAuthenticated = false; // 🔹 Lógica para cerrar sesión
  }

  login() {
    this.isAuthenticated = true; // 🔹 Lógica para iniciar sesión
  }
}
