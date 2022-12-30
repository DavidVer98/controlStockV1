import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosModalComponent } from './servicios-modal.component';

describe('ServiciosModalComponent', () => {
  let component: ServiciosModalComponent;
  let fixture: ComponentFixture<ServiciosModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiciosModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiciosModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
