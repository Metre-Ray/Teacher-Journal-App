import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectsListPageComponent } from './subjects-list-page.component';

describe('SubjectsListPageComponent', () => {
  let component: SubjectsListPageComponent;
  let fixture: ComponentFixture<SubjectsListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectsListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectsListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
