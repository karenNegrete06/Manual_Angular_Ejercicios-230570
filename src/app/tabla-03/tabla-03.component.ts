import { Component, OnInit, AfterViewInit, OnDestroy, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import * as songsData from '../services/songs.json';

interface Song {
  title: string;
  artist: string;
  genre: string;
  streams_million: number;
  release_date: string;
  link: string;
}

@Component({
  selector: 'app-tabla-03',
  templateUrl: './tabla-03.component.html',
  styleUrls: ['./tabla-03.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class Tabla03Component implements OnInit, AfterViewInit, OnDestroy {
  songs: Song[] = [];
  itemsPerPage = 5;
  currentPage = 1;
  searchTerm = '';
  sortColumn: keyof Song = 'streams_million';
  sortDirection: 'asc' | 'desc' = 'desc';
  private root!: am5.Root;

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.songs = (songsData as any).default?.songs || (songsData as any).songs;
    this.sortData();
  }

  ngAfterViewInit() {
    this.createChart();
  }

  ngOnDestroy() {
    if (this.root) {
      this.root.dispose();
    }
  }

  get totalPages(): number {
    return Math.ceil(this.filteredSongs.length / this.itemsPerPage);
  }

  get filteredSongs(): Song[] {
    return this.songs.filter(song =>
      Object.values(song).some(value =>
        value.toString().toLowerCase().includes(this.searchTerm.toLowerCase())
      )
    );
  }

  get paginatedSongs(): Song[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredSongs.slice(startIndex, startIndex + this.itemsPerPage);
  }

  sort(column: keyof Song): void {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }
    this.sortData();
    this.createChart(); // 🔹 Actualizar gráfico tras ordenamiento
  }

  private sortData(): void {
    this.songs.sort((a, b) => {
      const aValue = a[this.sortColumn];
      const bValue = b[this.sortColumn];
      return this.sortDirection === 'asc' 
        ? (aValue > bValue ? 1 : -1)
        : (aValue < bValue ? 1 : -1);
    });
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.createChart(); // 🔹 Actualizar gráfico al cambiar de página
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.createChart(); // 🔹 Actualizar gráfico al cambiar de página
    }
  }

  private createChart(): void {
    if (this.root) {
      this.root.dispose(); // 🔹 Limpiar gráfico previo
    }

    this.root = am5.Root.new(this.elementRef.nativeElement.querySelector("#chartdiv"));

    this.root.setThemes([am5themes_Animated.new(this.root)]);

    let chart = this.root.container.children.push(am5xy.XYChart.new(this.root, {
      panX: false,
      panY: false,
      wheelX: "panX",
      wheelY: "zoomX",
      layout: this.root.verticalLayout
    }));

    let xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(this.root, {
      categoryField: "title",
      renderer: am5xy.AxisRendererX.new(this.root, {})
    }));

    let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(this.root, {
      renderer: am5xy.AxisRendererY.new(this.root, {})
    }));

    let series = chart.series.push(am5xy.ColumnSeries.new(this.root, {
      name: "Streams (millones)",
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: "streams_million",
      categoryXField: "title"
    }));

    // 🔹 Usar solo los datos de la página actual en el gráfico
    xAxis.data.setAll(this.paginatedSongs);
    series.data.setAll(this.paginatedSongs);

    series.appear(1000);
    chart.appear(1000, 100);
  }
}
