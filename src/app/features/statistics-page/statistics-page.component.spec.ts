import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsPageComponent } from './statistics-page.component';
import { CustomDropdownComponent } from 'src/app/shared/components/custom-dropdown/custom-dropdown.component';
import { SortPipe } from 'src/app/shared/pipes/sort.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';

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
