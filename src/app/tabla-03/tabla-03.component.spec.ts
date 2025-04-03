import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tabla03Component } from './tabla-03.component';

describe('Tabla03Component', () => {
  let component: Tabla03Component;
  let fixture: ComponentFixture<Tabla03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tabla03Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tabla03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
