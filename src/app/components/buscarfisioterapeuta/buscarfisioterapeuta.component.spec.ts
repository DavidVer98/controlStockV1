import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarfisioterapeutaComponent } from './buscarfisioterapeuta.component';

describe('BuscarfisioterapeutaComponent', () => {
  let component: BuscarfisioterapeutaComponent;
  let fixture: ComponentFixture<BuscarfisioterapeutaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarfisioterapeutaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarfisioterapeutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
