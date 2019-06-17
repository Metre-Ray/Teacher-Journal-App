import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDateFormComponent } from './new-date-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core';

// tslint:disable: no-any

@Pipe({
  name: 'translate'
})
class TranslatePipe implements PipeTransform {
  public transform(value: any): any {
    return value;
  }
}

describe('NewDateFormComponent', () => {
  let component: NewDateFormComponent;
  let fixture: ComponentFixture<NewDateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NewDateFormComponent,
        TranslatePipe
      ],
      imports: [ ReactiveFormsModule ]
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
