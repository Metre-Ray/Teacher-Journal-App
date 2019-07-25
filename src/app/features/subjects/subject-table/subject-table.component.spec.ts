import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectTableComponent } from './subject-table.component';
import { Pipe, PipeTransform } from '@angular/core';
import { SortPipe } from 'src/app/shared/pipes/sort.pipe';

@Pipe({
  name: 'translate'
})
class TranslatePipe implements PipeTransform {
  // tslint:disable-next-line: no-any
  public transform(value: any): any {
    return value;
  }
}

describe('SubjectTableComponent', () => {
  let component: SubjectTableComponent;
  let fixture: ComponentFixture<SubjectTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SubjectTableComponent,
        TranslatePipe,
        SortPipe
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
