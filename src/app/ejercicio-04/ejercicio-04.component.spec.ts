import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio04Component } from './ejercicio-04.component';

describe('Ejercicio04Component', () => {
  let component: Ejercicio04Component;
  let fixture: ComponentFixture<Ejercicio04Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio04Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
