import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
@Component({
  selector: 'app-ejercicio-11',
  standalone:true,
  imports: [NgOptimizedImage],
  templateUrl: './ejercicio-11.component.html',
  styleUrl: './ejercicio-11.component.css'
})
export class Ejercicio11Component {
  [x: string]: any;
  logoAlt = 'Angular logo';
  username = 'youngTech';
  logoUrl = 'https://seeklogo.com/images/A/angular-icon-logo-5FC0C40EAC-seeklogo.com.png';
  
  
    getSafeUrl(logoUrl: string) {
      return this['sanitizer'].bypassSecurityTrustUrl(logoUrl);
    }
}
