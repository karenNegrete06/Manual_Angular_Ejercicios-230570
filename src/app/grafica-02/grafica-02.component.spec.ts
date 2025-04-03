import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grafica02Component } from './grafica-02.component';

describe('Grafica02Component', () => {
  let component: Grafica02Component;
  let fixture: ComponentFixture<Grafica02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Grafica02Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Grafica02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
