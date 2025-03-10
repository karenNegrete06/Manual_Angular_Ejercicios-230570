import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio-07',
  imports: [],
  templateUrl: './ejercicio-07.component.html',
  styleUrl: './ejercicio-07.component.css'
})
export class Ejercicio07Component {
  message = '';

  onMouseOver() {
    this.message = 'Way to go 🚀';
  }
}
