import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentTableComponent } from './student-table.component';
import { Pipe, PipeTransform, Directive, Input } from '@angular/core';


// tslint:disable: no-any

@Pipe ({
  name: 'translate'
})
class TranslatePipe implements PipeTransform {
  transform(value: any[]) {
    return value;
  }
}

@Directive({
  selector: '[appToggleClass]'
})
class ToggleClassDirective {
  @Input('appToggleClass') name: any;
}


describe('StudentTableComponent', () => {
  let component: StudentTableComponent;
  let fixture: ComponentFixture<StudentTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        StudentTableComponent,
        TranslatePipe,
        ToggleClassDirective
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
