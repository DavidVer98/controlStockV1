import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Servicio9ModalComponent } from './servicio9-modal.component';

describe('Servicio9ModalComponent', () => {
  let component: Servicio9ModalComponent;
  let fixture: ComponentFixture<Servicio9ModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Servicio9ModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Servicio9ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
