import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ejercicio-09',
  imports: [],
  templateUrl: './ejercicio-09.component.html',
  styleUrl: './ejercicio-09.component.css'
})
export class Ejercicio09Component {
  @Output() addItemEvent = new EventEmitter<string>();

  items = new Array();

  addItem(item: string) {
    this.items.push(item);
  }
  
}
