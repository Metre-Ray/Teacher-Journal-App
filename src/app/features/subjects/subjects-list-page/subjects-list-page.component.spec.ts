import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectsListPageComponent } from './subjects-list-page.component';
import { SortPipe } from 'src/app/shared/pipes/sort.pipe';
import { Directive, Input, HostListener } from '@angular/core';
import { RoundButtonComponent } from 'src/app/shared/components/button/round-button.component';
import { of, Observable } from 'rxjs';
import { Store } from '@ngrx/store';

// tslint:disable: no-any
// tslint:disable: no-empty
@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[routerLink]'
})
export class RouterLinkDirective {
  @Input('routerLink') public linkParams: any;

  @HostListener('click')
  public onClick(): void {}
}

class MockStore {
  public static state: { data: { students: any[]; subjects: any[]; } } = {
    data: {
      students: [],
      subjects: []
    }
  };

  public static dispatch(): void {}

  public static select(func: (d: any) => void): Observable<any> {
    return of(func(MockStore.state));
  }
}

describe('SubjectsListPageComponent', () => {
  let component: SubjectsListPageComponent;
  let fixture: ComponentFixture<SubjectsListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SubjectsListPageComponent,
        SortPipe,
        RouterLinkDirective,
        RoundButtonComponent
      ],
      providers: [ { provide: Store, useValue: MockStore } ]
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
