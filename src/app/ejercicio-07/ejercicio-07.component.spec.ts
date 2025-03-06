import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio07Component } from './ejercicio-07.component';

describe('Ejercicio07Component', () => {
  let component: Ejercicio07Component;
  let fixture: ComponentFixture<Ejercicio07Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio07Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio07Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
