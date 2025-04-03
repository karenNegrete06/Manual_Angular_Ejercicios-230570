import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root', // Esto permite que el servicio esté disponible en toda la app
})
export class EjercicioService {
  // Estado actual del ejercicio seleccionado
  private ejercicioActual = new BehaviorSubject<{ nombre: string; descripcion: string }>({
    nombre: '',
    descripcion: '',
  });

  // Observable para suscribirse a los cambios
  ejercicioActual$ = this.ejercicioActual.asObservable();

  // Método para actualizar el ejercicio actual
  setEjercicio(nombre: string, descripcion: string) {
    this.ejercicioActual.next({ nombre, descripcion });
  }
}
