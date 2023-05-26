import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAlumnosAdminComponent } from './form-alumnos-admin.component';

describe('FormAlumnosAdminComponent', () => {
  let component: FormAlumnosAdminComponent;
  let fixture: ComponentFixture<FormAlumnosAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAlumnosAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAlumnosAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
