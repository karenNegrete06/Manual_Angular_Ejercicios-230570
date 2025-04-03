import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tabla04Component } from './tabla-04.component';

describe('Tabla04Component', () => {
  let component: Tabla04Component;
  let fixture: ComponentFixture<Tabla04Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tabla04Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tabla04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
