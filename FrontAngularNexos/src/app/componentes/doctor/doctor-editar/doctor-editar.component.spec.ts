import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorEditarComponent } from './doctor-editar.component';

describe('DoctorEditarComponent', () => {
  let component: DoctorEditarComponent;
  let fixture: ComponentFixture<DoctorEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
