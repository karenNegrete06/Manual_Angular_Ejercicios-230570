import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Table01Component } from './table-01.component';

describe('Table01Component', () => {
  let component: Table01Component;
  let fixture: ComponentFixture<Table01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Table01Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Table01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
