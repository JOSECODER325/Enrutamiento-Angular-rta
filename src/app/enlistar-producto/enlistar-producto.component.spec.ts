import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnlistarProductoComponent } from './enlistar-producto.component';

describe('EnlistarProductoComponent', () => {
  let component: EnlistarProductoComponent;
  let fixture: ComponentFixture<EnlistarProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnlistarProductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnlistarProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
