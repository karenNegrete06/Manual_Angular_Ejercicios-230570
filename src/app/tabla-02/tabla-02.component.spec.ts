import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tabla02Component } from './tabla-02.component';

describe('Tabla02Component', () => {
  let component: Tabla02Component;
  let fixture: ComponentFixture<Tabla02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tabla02Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tabla02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
