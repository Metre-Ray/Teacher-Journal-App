import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectsListPageComponent } from './subjects-list-page.component';
import { SortPipe } from 'src/app/shared/pipes/sort.pipe';
import { Directive, Input, HostListener } from '@angular/core';
import { RoundButtonComponent } from 'src/app/shared/components/round-button/round-button.component';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';


@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[routerLink]'
})
export class RouterLinkDirective {
  // tslint:disable-next-line: no-any
  @Input('routerLink') linkParams: any;

  @HostListener('click')
  onClick() {
  }
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
