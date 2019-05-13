import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectMarksPageComponent } from './subject-marks-page.component';

describe('SubjectMarksPageComponent', () => {
  let component: SubjectMarksPageComponent;
  let fixture: ComponentFixture<SubjectMarksPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectMarksPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectMarksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
