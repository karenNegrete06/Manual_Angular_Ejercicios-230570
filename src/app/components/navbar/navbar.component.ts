import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterModule, MatButtonModule, MatIconModule, MatMenuModule, MatToolbarModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input() isAuthenticated: boolean = false;
  @Output() logoutEvent = new EventEmitter<void>();

  userImage = 'https://c1.klipartz.com/pngpicture/823/765/sticker-png-login-icon-system-administrator-user-user-profile-icon-design-avatar-face-head.png';

  constructor(private sanitizer: DomSanitizer) {}

  getSafeUrl(imageUrl: string) {
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
  }

  logout() {
    this.logoutEvent.emit(); // Dispara el evento de cierre de sesión
  }
  exerciseDescription: string = ''; // Variable para almacenar la descripción

  setExerciseDescription(description: string) {
    this.exerciseDescription = description; // Actualiza la descripción al hacer clic en un ejercicio
  }

  // Resto de tu lógica del componente...

  
}
