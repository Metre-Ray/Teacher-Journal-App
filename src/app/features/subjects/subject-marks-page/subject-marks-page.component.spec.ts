import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectMarksPageComponent } from './subject-marks-page.component';
import { SortPipe } from 'src/app/shared/pipes/sort.pipe';
import { NewDateFormComponent } from '../new-date-form/new-date-form.component';
import { SubjectTableComponent } from '../subject-table/subject-table.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';


@Pipe({
  name: 'translate'
})
class TranslatePipe implements PipeTransform {
  // tslint:disable-next-line: no-any
  transform(value: any): any {
    return value;
  }
}

class MockActivatedRoute {
  static snapshot = {
    paramMap: {
      get: () => ''
    }
  };
}

class MockStore {
  static state = {
    data: {
      students: [],
      subjects: []
    }
  };

  static dispatch() {}

  static select(func) {
    return of(func(MockStore.state));
  }
}

describe('SubjectMarksPageComponent', () => {
  let component: SubjectMarksPageComponent;
  let fixture: ComponentFixture<SubjectMarksPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SubjectMarksPageComponent,
        SortPipe,
        NewDateFormComponent,
        SubjectTableComponent,
        TranslatePipe
      ],
      imports: [ ReactiveFormsModule ],
      providers: [
        { provide: ActivatedRoute, useValue: MockActivatedRoute },
        { provide: Store, useValue: MockStore }
      ]
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
