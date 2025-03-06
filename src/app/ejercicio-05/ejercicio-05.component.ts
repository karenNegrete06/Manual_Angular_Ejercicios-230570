import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio-05',
  imports: [],
  templateUrl: './ejercicio-05.component.html',
  styleUrl: './ejercicio-05.component.css'
})
export class Ejercicio05Component {
  users = [
    {id: 0, name: 'Uriel'},
    {id: 1, name: 'Lorena'},
    {id: 2, name: 'Idai'},
    {id: 3, name: 'Matias'},
    {id: 4, name: 'Josue'},
  ];
}
