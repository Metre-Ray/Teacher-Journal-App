import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsPageComponent } from './statistics-page.component';
import { CustomDropdownComponent } from 'src/app/shared/components/custom-dropdown/custom-dropdown.component';
import { SortPipe } from 'src/app/shared/pipes/sort.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { of, Observable } from 'rxjs';
import { Store } from '@ngrx/store';

class MockStore {
  public static state: object = {
    data: {
      students: [],
      subjects: []
    }
  };

  // tslint:disable-next-line: no-any
  public static select(func: (arg0: object) => void): Observable<any> {
    return of(func(MockStore.state));
  }
}

describe('StatisticsPageComponent', () => {
  let component: StatisticsPageComponent;
  let fixture: ComponentFixture<StatisticsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        StatisticsPageComponent,
        CustomDropdownComponent,
        SortPipe
      ],
      imports: [ ReactiveFormsModule ],
      providers: [ { provide: Store, useValue: MockStore } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
