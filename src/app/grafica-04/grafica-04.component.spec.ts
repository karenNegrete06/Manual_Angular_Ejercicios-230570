import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grafica04Component } from './grafica-04.component';

describe('Grafica04Component', () => {
  let component: Grafica04Component;
  let fixture: ComponentFixture<Grafica04Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Grafica04Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Grafica04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
