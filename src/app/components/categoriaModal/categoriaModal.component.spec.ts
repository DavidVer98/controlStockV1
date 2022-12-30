import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaModalComponent } from './categoriaModal.component';

describe('ModalpopupComponent', () => {
  let component: CategoriaModalComponent;
  let fixture: ComponentFixture<CategoriaModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriaModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
