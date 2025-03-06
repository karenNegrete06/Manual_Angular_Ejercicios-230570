import { Component } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { ContentComponent } from "../content/content.component";
import { FooterComponent } from "../footer/footer.component";
import { BreadcrumbComponent } from "../breadcrumb/breadcrumb.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-container',
  imports: [SidebarComponent, ContentComponent, FooterComponent, BreadcrumbComponent],
  templateUrl: './page-container.component.html',
  styleUrl: './page-container.component.css'
})
export class PageContainerComponent {
  isSidebarVisible = true;
  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }
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
}
