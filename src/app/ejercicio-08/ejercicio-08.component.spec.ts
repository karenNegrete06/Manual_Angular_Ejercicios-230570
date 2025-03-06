import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio08Component } from './ejercicio-08.component';

describe('Ejercicio08Component', () => {
  let component: Ejercicio08Component;
  let fixture: ComponentFixture<Ejercicio08Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio08Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio08Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
