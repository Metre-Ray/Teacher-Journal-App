import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPageComponent } from './student-page.component';
import { Pipe, PipeTransform, Directive, Input, HostListener, Injectable } from '@angular/core';
import { RoundButtonComponent } from 'src/app/shared/components/button/round-button.component';
import { StudentTableComponent } from '../student-table/student-table.component';
import { Store } from '@ngrx/store';
import { of, Observable } from 'rxjs';

// tslint:disable: no-any

@Pipe ({
  name: 'sort'
})
class SortPipe implements PipeTransform {
  public transform(value: any[]): any[] {
    return value;
  }
}

@Pipe ({
  name: 'translate'
})
class TranslatePipe implements PipeTransform {
  public transform(value: any[]): any[] {
    return value;
  }
}

class MockStore {
  public static state: { data: object } = {
    data: {
      students: [],
      subjects: []
    }
  };

  public static select(func: any): Observable<any> {
    return of(func(MockStore.state));
  }
}

@Directive({
// tslint:disable-next-line: directive-selector
  selector: '[routerLink]'
})
class RouterLinkDirective {
  @Input('routerLink') public linkParams: any;
  public navigatedTo: any = undefined;

  @HostListener('click')
  public onClick(): void {
    this.navigatedTo = this.linkParams;
  }
}

@Directive({
  selector: '[appToggleClass]'
})
class ToggleClassDirective {
  @Input('appToggleClass') public name: any;
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
