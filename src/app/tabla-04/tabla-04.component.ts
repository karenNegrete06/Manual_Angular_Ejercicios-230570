import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { CommonModule } from '@angular/common';
import { SessionService } from '../services/session.service'
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field'; // <-- Agregar este módulo
import { MatInputModule } from '@angular/material/input'; // <-- Agregar este módulo
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-tabla-04',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule, // <-- Importado aquí
    MatInputModule,
    HttpClientModule
  ],
  templateUrl: './tabla-04.component.html',
  styleUrl: './tabla-04.component.css'
})
export class Tabla04Component implements OnInit {
  displayedColumns: string[] = ['sessionId', 'email', 'nickname', 'macAddress', 'createdAt', 'lastAccesed', 'serverIp','serverMac','clientIp', 'status'];
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private sessionService: SessionService) {}

  ngOnInit():void{
    this.sessionService.getSession().subscribe(data =>{
      console.log(data);
      this.dataSource.data = data;
    }, error =>{
      console.error('Error al cargar datos', error)
    })
  }

  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort= this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
