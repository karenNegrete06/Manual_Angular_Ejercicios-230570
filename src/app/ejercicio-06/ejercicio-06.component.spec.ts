import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio06Component } from './ejercicio-06.component';

describe('Ejercicio06Component', () => {
  let component: Ejercicio06Component;
  let fixture: ComponentFixture<Ejercicio06Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio06Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
