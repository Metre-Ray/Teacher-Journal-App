import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPageComponent } from './student-page.component';
import { Pipe, PipeTransform, Directive, Input, HostListener, Injectable } from '@angular/core';
import { RoundButtonComponent } from 'src/app/shared/components/round-button/round-button.component';
import { StudentTableComponent } from '../student-table/student-table.component';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';


// tslint:disable: no-any

@Pipe ({
  name: 'sort'
})
class SortPipe implements PipeTransform {
  transform(value: any[]) {
    return value;
  }
}

@Pipe ({
  name: 'translate'
})
class TranslatePipe implements PipeTransform {
  transform(value: any[]) {
    return value;
  }
}

class MockStore {
  static state = {
    data: {
      students: [],
      subjects: []
    }
  };

  static select(func) {
    return of(func(MockStore.state));
  }
}

@Directive({
// tslint:disable-next-line: directive-selector
  selector: '[routerLink]'
})
class RouterLinkDirective {
  @Input('routerLink') linkParams: any;
  navigatedTo: any = null;

  @HostListener('click')
  onClick() {
    this.navigatedTo = this.linkParams;
  }
}

@Directive({
  selector: '[appToggleClass]'
})
class ToggleClassDirective {
  @Input('appToggleClass') name: any;
}



describe('StudentPageComponent', () => {
  let component: StudentPageComponent;
  let fixture: ComponentFixture<StudentPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        StudentPageComponent,
        SortPipe,
        RoundButtonComponent,
        StudentTableComponent,
        RouterLinkDirective,
        TranslatePipe,
        ToggleClassDirective
      ],
      providers: [ {provide: Store, useValue: MockStore} ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
