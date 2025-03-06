import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio03Component } from './ejercicio-03.component';

describe('Ejercicio03Component', () => {
  let component: Ejercicio03Component;
  let fixture: ComponentFixture<Ejercicio03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio03Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
