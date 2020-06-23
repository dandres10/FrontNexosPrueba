import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorVerComponent } from './doctor-ver.component';

describe('DoctorVerComponent', () => {
  let component: DoctorVerComponent;
  let fixture: ComponentFixture<DoctorVerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorVerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorVerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
