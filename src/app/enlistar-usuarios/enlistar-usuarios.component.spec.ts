import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnlistarUsuariosComponent } from './enlistar-usuarios.component';

describe('EnlistarUsuariosComponent', () => {
  let component: EnlistarUsuariosComponent;
  let fixture: ComponentFixture<EnlistarUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnlistarUsuariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnlistarUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
