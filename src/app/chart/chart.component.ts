import { Component, OnInit, OnDestroy } from '@angular/core';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import { ChartDataService } from '../../services/chart-data.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports:[CommonModule, FormsModule],
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit, OnDestroy {
  private root!: am5.Root;
  private chart!: am5xy.XYChart;
  private series!: am5xy.ColumnSeries;
  private xAxis!: am5xy.CategoryAxis<any>;
  
  newData = {
    category: '',
    value: 0
  };

  constructor(private chartDataService: ChartDataService) {}

  ngOnInit(): void {
    this.loadChart();
  }

  loadChart(): void {
    this.chartDataService.getChartData().subscribe(data => {
      this.initChart(data);
    });
  }

  initChart(chartData: any[]): void {
    // Dispose previous chart if exists
    if (this.root) {
      this.root.dispose();
    }

    // Create root element
    this.root = am5.Root.new('chartdiv');    

    this.root.setThemes([am5themes_Animated.new(this.root)]);

    

    // Create chart
    this.chart = this.root.container.children.push(
      am5xy.XYChart.new(this.root, {
        panX: true,
        panY: true,
        wheelX: 'panX',
        wheelY: 'zoomX'
      })
    );

    // Create axes
    this.xAxis = this.chart.xAxes.push(
      am5xy.CategoryAxis.new(this.root, {
        categoryField: 'category',
        renderer: am5xy.AxisRendererX.new(this.root, {
          minGridDistance: 30
        })
      })
    );

    const yAxis = this.chart.yAxes.push(
      am5xy.ValueAxis.new(this.root, {
        renderer: am5xy.AxisRendererY.new(this.root, {})
      })
    );

    // Create series
    this.series = this.chart.series.push(
      am5xy.ColumnSeries.new(this.root, {
        name: 'Datos',
        xAxis: this.xAxis,
        yAxis: yAxis,
        valueYField: 'value',
        categoryXField: 'category',
        tooltip: am5.Tooltip.new(this.root, {
          labelText: '{category}: {valueY}'
        })
      })
    );

    // Set data
    this.xAxis.data.setAll(chartData);
    this.series.data.setAll(chartData);

    // Add cursor
    this.chart.set('cursor', am5xy.XYCursor.new(this.root, {}));
  }

  addData(): void {
    if (!this.newData.category || this.newData.value === null) return;

    this.chartDataService.addDataPoint(this.newData).subscribe({
      next: (response) => {
        console.log('Dato agregado:', response);
        this.loadChart(); // Recargar la gráfica con los nuevos datos
        this.newData = { category: '', value: 0 }; // Resetear formulario
      },
      error: (err) => {
        console.error('Error al agregar dato:', err);
      }
    });
  }

  ngOnDestroy(): void {
    if (this.root) {
      this.root.dispose();
    }
  }
}