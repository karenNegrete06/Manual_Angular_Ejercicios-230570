import { Component } from '@angular/core';
import { SidebarComponent } from "../components/sidebar/sidebar.component";
import { BreadcrumbComponent } from "../components/breadcrumb/breadcrumb.component";
import { ContentComponent } from "../components/content/content.component";
import { FooterComponent } from "../components/footer/footer.component";
import { LoginComponent } from "../components/login/login.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-pages',
  imports: [],
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.css'
})
export class PagesComponent {
isAuthenticated: boolean = false; // Estado inicial

  constructor(private router: Router) {}

  login() {
    this.isAuthenticated = true;
    this.router.navigate(['/dashboard']); // ✅ Redirige a la página autenticada
  }

  logout() {
    this.isAuthenticated = false;
    this.router.navigate(['/pages']); // ✅ Redirige a la página sin sesión
  }
  isSidebarVisible = true;
  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }
}
