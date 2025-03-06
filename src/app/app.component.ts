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
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    ContentComponent,
    PageContainerComponent,
    MatButtonModule,
    PagesComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Manual_ejercicios_Angular-230570-KLNH';
  isAuthenticated: boolean = false; // Estado inicial

  constructor(private router: Router) {}

  login() {
    this.isAuthenticated = true;
    this.router.navigate(['/dashboard']); // ✅ Redirige a la página autenticada
  }

  logout() {
    this.isAuthenticated = false;
    this.router.navigate(['/login']); // ✅ Redirige a la página sin sesión
  }
}
