import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Usuario {
  nombre: string;
  apellido: string;
  hermanos: Number;
}
@Component({
  selector: 'app-table-01',
  templateUrl: './table-01.component.html',
  styleUrls: ['./table-01.component.css'], // Corregido: styleUrl → styleUrls
  standalone: true,
  imports: [CommonModule, FormsModule]
})

export class Table01Component implements OnInit {
  items: Usuario[] = [
    { nombre: 'Marco Antonio', apellido: 'Ramirez Herenández', hermanos: 3 },
    { nombre: 'Ailton', apellido: 'Artiaga Quiroga', hermanos: 3 },
    { nombre: 'Dulce', apellido: 'Balderas Gomez', hermanos: 2 },
    { nombre: 'Daniel De Jesús', apellido: 'Bravo Godinez', hermanos: 2 },
    { nombre: 'Edgar', apellido: 'Cabrera Velázquez', hermanos: 2 },
    { nombre: 'Jesús Antonio', apellido: 'Estrada Jiménez', hermanos: 2 },
    { nombre: 'Osvaldo Abishai', apellido: 'Flores Campos', hermanos: 4 },
    { nombre: 'Carlos Isaac', apellido: 'Fosado Escudero', hermanos: 2 },
    { nombre: 'Lorena Citlalli', apellido: 'Galindo Gonzalez', hermanos: 2 },
    { nombre: 'Esther', apellido: 'González Peralta', hermanos: 0 },
    { nombre: 'Abril', apellido: 'Guzmán Barrera', hermanos: 3 },
    { nombre: 'Tania', apellido: 'Ibarra Salgado', hermanos: 2 },
    { nombre: 'Jose Agustin', apellido: 'Jimenez Castillo', hermanos: 1 },
    { nombre: 'Brandon', apellido: 'Leon Cabrera', hermanos: 6 },
    { nombre: 'Ana Daniela', apellido: 'López Neri', hermanos: 2 },
    { nombre: 'Josue Atlai', apellido: 'Martinez Otero', hermanos: 0 },
    { nombre: 'Uriel Abdallah', apellido: 'Medina Torres', hermanos: 1 },
    { nombre: 'Brian Jesus', apellido: 'Mendoza Marquez', hermanos: 3 },
    { nombre: 'Karen Lizbeth', apellido: 'Negrete Hernández', hermanos: 3 },
    { nombre: 'Antonio', apellido: 'Ocpaco Dolores', hermanos: 2 },
    { nombre: 'Jonathan Baldemar', apellido: 'Ramírez Reyes', hermanos: 2 },
    { nombre: 'Marcos Jesús', apellido: 'Ríos Durán', hermanos: 3 },
    { nombre: 'Christian Paul', apellido: 'Rodriguez Perez', hermanos: 1 },
    { nombre: 'Yáred Amaury', apellido: 'Romero Martínez', hermanos: 2 },
    { nombre: 'Ángel De Jesús', apellido: 'Rufino Mendoza', hermanos: 3 },
    { nombre: 'Diego Salvador', apellido: 'Tecorralco Martinez', hermanos: 2 },
    { nombre: 'Guadalupe Idai', apellido: 'Vargas Galindo', hermanos: 3 },
    { nombre: 'Juvenal', apellido: 'Viveros Martinez', hermanos: 3 },
    { nombre: 'Zyanya Ahuachtli', apellido: 'Zacatenco Pedroza', hermanos: 2 }
];


  filteredItems: Usuario[] = [...this.items];
  paginatedItems: Usuario[] = [];
  itemsPerPage: number = 10;
  currentPage = 1;
  totalPages = 1;

  ngOnInit() {
    this.updatePagination();
  }

  filterTable() {
    const searchInput = (document.getElementById('searchInput') as HTMLInputElement).value.toLowerCase();
    this.filteredItems = this.items.filter(item =>
      item.nombre.toLowerCase().includes(searchInput) ||
      item.hermanos.toString().toLowerCase().includes(searchInput) ||
      item.apellido.toString().includes(searchInput)
    );
    this.currentPage = 1;
    this.updatePagination();
  }

  updatePagination() {
    this.totalPages = Math.ceil(this.filteredItems.length / this.itemsPerPage);
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    this.paginatedItems = this.filteredItems.slice(startIndex, startIndex + this.itemsPerPage);
  }

  changePage(page: number) {
    this.currentPage = page;
    this.updatePagination();
  }

  onItemsPerPageChange(event: any) {
    this.itemsPerPage = Number(event.target.value);
    this.currentPage = 1;
    this.updatePagination();
  }
}
