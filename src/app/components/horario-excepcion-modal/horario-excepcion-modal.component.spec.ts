import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorarioExcepcionModalComponent } from './horario-excepcion-modal.component';

describe('HorarioExcepcionModalComponent', () => {
  let component: HorarioExcepcionModalComponent;
  let fixture: ComponentFixture<HorarioExcepcionModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorarioExcepcionModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HorarioExcepcionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
