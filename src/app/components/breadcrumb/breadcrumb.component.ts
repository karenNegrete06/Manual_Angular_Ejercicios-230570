import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  imports: [],
  template:`<nav aria-label="breadcrumb">
  <ul class="breadcrumb">
    <li *ngFor="let breadcrumb of breadcrumbs; let last = last">
      <a *ngIf="!last; else lastItem" [routerLink]="breadcrumb.url">{{ breadcrumb.label }}</a>
      <ng-template #lastItem>{{ breadcrumb.label }}</ng-template>
    </li>
  </ul>
</nav>`,
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.css'
})
export class BreadcrumbComponent {
  breadcrumbs: Array<{ label: string, url: string }> = [];

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events.subscribe(() => {
      this.breadcrumbs = [];
      let currentRoute = this.route.root;
      let url = '';
      while (currentRoute.children.length) {
        const child = currentRoute.children[0];
        const routeConfig = child.routeConfig;
        if (routeConfig && routeConfig.path) {
          url += `/${routeConfig.path}`;
          this.breadcrumbs.push({ label: routeConfig.path, url });
        }
        currentRoute = child;
      }
    });
  }
}
