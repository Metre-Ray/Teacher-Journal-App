import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDateFormComponent } from './new-date-form.component';

describe('NewDateFormComponent', () => {
  let component: NewDateFormComponent;
  let fixture: ComponentFixture<NewDateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
