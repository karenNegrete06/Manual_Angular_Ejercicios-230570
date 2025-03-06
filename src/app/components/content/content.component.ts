import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";
import { BreadcrumbComponent } from "../breadcrumb/breadcrumb.component";
import { LoginComponent } from "../login/login.component";
@Component({
  selector: 'app-content',
  standalone: true,  // Asegúrate de que sea un componente standalone si lo usas así
  imports: [RouterModule, CommonModule, LoginComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent {
login() {
throw new Error('Method not implemented.');
}
isAuthenticated: any;
}
