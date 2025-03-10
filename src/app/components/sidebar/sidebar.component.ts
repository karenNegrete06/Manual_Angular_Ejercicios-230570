import { Component, Inject, OnInit } from '@angular/core';
import { EjercicioService } from '../../ejercicio.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  imports:[CommonModule]
})
export class SidebarComponent implements OnInit {
  ejercicioActual: any = null;
ejercicioSeleccionado: any;

  constructor(@Inject(EjercicioService) private ejercicioService: EjercicioService) {}

  ngOnInit() {
    this.ejercicioService.ejercicioActual.subscribe((ejercicio: any) => {
      this.ejercicioActual = ejercicio;
    });
  }
  exerciseDescription: string = ''; // Variable para almacenar la descripción

  setExerciseDescription(description: string) {
    this.exerciseDescription = description; // Actualiza la descripción al hacer clic en un ejercicio
  }

}
