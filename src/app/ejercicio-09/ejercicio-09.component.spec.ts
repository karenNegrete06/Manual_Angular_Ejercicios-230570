import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio09Component } from './ejercicio-09.component';

describe('Ejercicio09Component', () => {
  let component: Ejercicio09Component;
  let fixture: ComponentFixture<Ejercicio09Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio09Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio09Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
