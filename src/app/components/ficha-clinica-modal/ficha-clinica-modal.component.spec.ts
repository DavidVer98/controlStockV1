import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaClinicaModalComponent } from './ficha-clinica-modal.component';

describe('FichaClinicaModalComponent', () => {
  let component: FichaClinicaModalComponent;
  let fixture: ComponentFixture<FichaClinicaModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FichaClinicaModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FichaClinicaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
