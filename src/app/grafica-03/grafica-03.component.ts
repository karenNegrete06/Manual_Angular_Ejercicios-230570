import { Component, OnInit, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import * as songsData from '../services/songs.json';

interface Song {
  title: string;
  artist: string;
  streams_million: number;
  release_date: string;
  genre: string;
  link: string;
}

@Component({
  selector: 'app-grafica-03',
  templateUrl: './grafica-03.component.html',
  styleUrls: ['./grafica-03.component.css']
})
export class Grafica03Component implements OnInit, OnDestroy {
  private root: am5.Root | undefined;
  songs: Song[] = [];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.loadData();
      this.initChart();
    }
  }

  loadData(): void {
    const data = (songsData as any)?.default?.songs || (songsData as any)?.songs;
    this.songs = Array.isArray(data) ? data : [];
  }

  initChart(): void {
    if (!this.songs.length) {
      console.warn("No hay datos disponibles para la gráfica.");
      return;
    }

    this.root = am5.Root.new("chartdiv");
    this.root.setThemes([am5themes_Animated.new(this.root)]);

    let chart = this.root.container.children.push(am5xy.XYChart.new(this.root, {
      panX: true,
      panY: false,
      wheelX: "none",
      wheelY: "zoomX",
      pinchZoomX: true
    }));

    let colors = chart.get("colors") || am5.ColorSet.new(this.root, {});

    const data = this.songs.map(song => ({
      category: `${song.title} - ${song.artist}`,
      value: song.streams_million,
      release_date: song.release_date,
      genre: song.genre,
      link: song.link,
      columnSettings: { fill: colors.next() }
    }));

    let xRenderer = am5xy.AxisRendererX.new(this.root, { minGridDistance: 50 });
    xRenderer.labels.template.setAll({
      rotation: -45,
      centerY: am5.p50,
      centerX: am5.p50,
      paddingTop: 10
    });

    let xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(this.root, {
      categoryField: "category",
      renderer: xRenderer
    }));

    xAxis.data.setAll(data);

    let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(this.root, {
      renderer: am5xy.AxisRendererY.new(this.root, {})
    }));

    let series = chart.series.push(am5xy.ColumnSeries.new(this.root, {
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: "value",
      categoryXField: "category"
    }));

    series.columns.template.setAll({
      tooltipText: "{categoryX}\nStreams: {valueY}M\nGénero: {genre}\nLanzamiento: {release_date}\n[Enlace a la canción]({link})",
      tooltipY: 0,
      strokeOpacity: 0,
      templateField: "columnSettings"
    });

    series.data.setAll(data);
    series.appear();
    chart.appear(1000, 100);
  }

  ngOnDestroy() {
    if (this.root) {
      this.root.dispose();
      this.root = undefined;
    }
  }
}
