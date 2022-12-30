import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCategoriaModalComponent } from './sub-categoria-modal.component';

describe('SubCategoriaModalComponent', () => {
  let component: SubCategoriaModalComponent;
  let fixture: ComponentFixture<SubCategoriaModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubCategoriaModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubCategoriaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
