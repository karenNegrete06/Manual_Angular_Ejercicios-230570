import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, NgZone, PLATFORM_ID, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-grafica-02',
  templateUrl: './grafica-02.component.html',
  styleUrls: ['./grafica-02.component.css']
})
export class Grafica02Component implements AfterViewInit, OnDestroy {
  private root!: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private zone: NgZone) {}

  browserOnly(f: () => void) {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        f();
      });
    }
  }

  async ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    this.browserOnly(async () => {
      /* Imports dinámicos para evitar errores en SSR */
      const am5index = await import('@amcharts/amcharts5/index');
      const am5flow = await import('@amcharts/amcharts5/flow');
      const am5themes_Animated = await import('@amcharts/amcharts5/themes/Animated');

      /* Chart code */
      // Create root element
      let root = am5index.Root.new("chartdiv");

      // Set themes
      root.setThemes([
        am5themes_Animated.default.new(root)
      ]);

      // Create series
      let series = root.container.children.push(am5flow.ArcDiagram.new(root, {
        sourceIdField: "from",
        targetIdField: "to",
        valueField: "value",
        orientation: "vertical"
      }));

      // Configure labels
      series.nodes.labels.template.setAll({
        fontSize: "0.85em",
        paddingLeft: 20,
        paddingRight: 20,
        width: 160
      });

      // Animated bullets
      series.bullets.push(function (_root, _series, dataItem) {
        let bullet = am5index.Bullet.new(root, {
          locationY: Math.random(),
          sprite: am5index.Circle.new(root, {
            radius: 2,
            fill: dataItem.get("source").get("fill")
          })
        });

        bullet.animate({
          key: "locationY",
          to: 1,
          from: 0,
          duration: Math.random() * 1000 + 2000,
          loops: Infinity
        });

        return bullet;
      });

      // Set data
      series.data.setAll([
        { "from": "Monica", "to": "Rachel", "value": 4 },
        { "from": "Monica", "to": "Chandler", "value": 63 },
        { "from": "Monica", "to": "Ross", "value": 16 },
        { "from": "Monica", "to": "Joey", "value": 9 },
        { "from": "Rachel", "to": "Chandler", "value": 7 },
        { "from": "Rachel", "to": "Ross", "value": 80 },
        { "from": "Rachel", "to": "Joey", "value": 30 },
        { "from": "Rachel", "to": "Phoebe", "value": 6 },
        { "from": "Chandler", "to": "Phoebe", "value": 7 },
        { "from": "Chandler", "to": "Janice", "value": 11 },
        { "from": "Chandler", "to": "Joanna", "value": 5 },
        { "from": "Chandler", "to": "Kathy", "value": 7 },
        { "from": "Monica", "to": "Pete", "value": 10 },
        { "from": "Ross", "to": "Joey", "value": 3 },
        { "from": "Ross", "to": "Phoebe", "value": 18 },
        { "from": "Ross", "to": "Carol", "value": 10 },
        { "from": "Ross", "to": "Mrs Geller", "value": 8 },
        { "from": "Ross", "to": "Emily", "value": 12 },
        { "from": "Ross", "to": "Elizabeth", "value": 8 },
        { "from": "Ross", "to": "Mona", "value": 11 },
        { "from": "Joey", "to": "Phoebe", "value": 6 },
        { "from": "Phoebe", "to": "David", "value": 14 },
        { "from": "Phoebe", "to": "Mike", "value": 18 }
      ]);

      // Make stuff animate on load
      series.appear(1000, 100);

      this.root = root;
    });
  }

  ngOnDestroy() {
    this.browserOnly(() => {
      if (this.root) {
        this.root.dispose();
      }
    });
  }
}
