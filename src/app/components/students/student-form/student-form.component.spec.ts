import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentFormComponent } from './student-form.component';
import { FormComponent } from '../../../shared/components/form/form.component';

import { Pipe, PipeTransform } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';

// tslint:disable: no-any
@Pipe({
  name: 'translate'
})
class TranslatePipe implements PipeTransform {
  transform(value: any): any {
    return value;
  }
}

const MockStore = {
  dispatch: () => {}
};

describe('StudentFormComponent', () => {
  let component: StudentFormComponent;
  let fixture: ComponentFixture<StudentFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        StudentFormComponent,
        TranslatePipe,
        FormComponent
      ],
      imports: [
        ReactiveFormsModule
      ],
      providers:    [ { provide: Store, useValue: MockStore } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
