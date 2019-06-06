import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectFormComponent } from './subject-form.component';
import { Pipe, PipeTransform } from '@angular/core';
import { FormComponent } from 'src/app/shared/components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { Actions } from '@ngrx/effects';

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

const MockActions = of({});

describe('SubjectFormComponent', () => {
  let component: SubjectFormComponent;
  let fixture: ComponentFixture<SubjectFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SubjectFormComponent,
        TranslatePipe,
        FormComponent
      ],
      imports: [ ReactiveFormsModule ],
      providers: [
        { provide: Store, useValue: MockStore },
        { provide: Actions, useValue: MockActions }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
