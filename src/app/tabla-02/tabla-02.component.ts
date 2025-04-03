import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface StockData {
  mes: string;
  precioCierre: number;
}

@Component({
  selector: 'app-tabla-02',
  templateUrl: './tabla-02.component.html',
  styleUrls: ['./tabla-02.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class Tabla02Component implements OnInit {
  items: StockData[] = [
    { mes: 'Enero', precioCierre: 221.30 },
    { mes: 'Febrero', precioCierre: 242.06 },
    { mes: 'Marzo', precioCierre: 192.72 },
    { mes: 'Abril', precioCierre: 187.79 },
    { mes: 'Mayo', precioCierre: 200.00 },
    { mes: 'Junio', precioCierre: 210.00 },
    { mes: 'Julio', precioCierre: 215.00 },
    { mes: 'Agosto', precioCierre: 220.00 },
    { mes: 'Septiembre', precioCierre: 225.00 },
    { mes: 'Octubre', precioCierre: 230.00 },
    { mes: 'Noviembre', precioCierre: 235.00 },
    { mes: 'Diciembre', precioCierre: 240.00 }
  ];

  filteredItems: StockData[] = [];
  paginatedItems: StockData[] = [];
  itemsPerPage: number = 5;
  currentPage = 1;
  totalPages = 1;
  isAscending: boolean = false;

  ngOnInit() {
    this.filteredItems = [...this.items];
    this.sortItems();
    this.updatePagination();
  }

  sortItems() {
    this.filteredItems.sort((a, b) => {
      return this.isAscending ? 
        a.precioCierre - b.precioCierre : 
        b.precioCierre - a.precioCierre;
    });
  }

  toggleSort() {
    this.isAscending = !this.isAscending;
    this.sortItems();
    this.updatePagination();
  }

  filterTable() {
    const searchInput = (document.getElementById('searchInput') as HTMLInputElement).value.toLowerCase();
    this.filteredItems = this.items.filter(item =>
      item.mes.toLowerCase().includes(searchInput) ||
      item.precioCierre.toString().includes(searchInput)
    );
    this.sortItems();
    this.currentPage = 1;
    this.updatePagination();
  }

  updatePagination() {
    this.totalPages = Math.ceil(this.filteredItems.length / this.itemsPerPage) || 1;
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
