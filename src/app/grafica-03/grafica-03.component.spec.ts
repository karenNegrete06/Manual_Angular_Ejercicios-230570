import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grafica03Component } from './grafica-03.component';

describe('Grafica03Component', () => {
  let component: Grafica03Component;
  let fixture: ComponentFixture<Grafica03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Grafica03Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Grafica03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
