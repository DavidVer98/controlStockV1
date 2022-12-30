import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Servicio9Component } from './servicio9.component';

describe('Servicio9Component', () => {
  let component: Servicio9Component;
  let fixture: ComponentFixture<Servicio9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Servicio9Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Servicio9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
