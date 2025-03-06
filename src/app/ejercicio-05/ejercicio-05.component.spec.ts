import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio05Component } from './ejercicio-05.component';

describe('Ejercicio05Component', () => {
  let component: Ejercicio05Component;
  let fixture: ComponentFixture<Ejercicio05Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio05Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
