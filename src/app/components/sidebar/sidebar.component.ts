import { Component, Inject, Input, OnInit } from '@angular/core';
import { EjercicioService } from '../../ejercicio.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  imports: [CommonModule]
})
export class SidebarComponent implements OnInit {
  ejercicioActual: any = null;

  constructor(@Inject(EjercicioService) private ejercicioService: EjercicioService) {}

  ngOnInit() {
    this.ejercicioService.ejercicioActual.subscribe((ejercicio: any) => {
      this.ejercicioActual = ejercicio;
    });
  }

  @Input() exercise: { name: string, description: string, objective: string } = { 
    name: '', 
    description: '', 
    objective: '' 
  };
}
