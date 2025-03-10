import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EjercicioService {
  private ejercicioSeleccionado = new BehaviorSubject<any>(null);
  ejercicioActual = this.ejercicioSeleccionado.asObservable();

  seleccionarEjercicio(ejercicio: any) {
    this.ejercicioSeleccionado.next(ejercicio);
  }
}
