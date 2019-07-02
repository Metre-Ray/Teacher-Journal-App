import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StatisticsPageComponent } from './statistics-page.component';
import { CustomDropdownComponent } from 'src/app/shared/components/custom-dropdown/custom-dropdown.component';
import { ReactiveFormsModule } from '@angular/forms';
import { of, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { NO_ERRORS_SCHEMA, Pipe, PipeTransform } from '@angular/core';
import { SortPipe } from 'src/app/shared/pipes/sort.pipe';

class MockStore {
  public static state: object = {
    data: {
      students: [],
      subjects: []
    }
  };

  public static select(func: (arg0: object) => void): Observable<void> {
    return of(func(MockStore.state));
  }
}

@Pipe({
  name: 'translate'
})
class MockTranslatePipe implements PipeTransform {
  public transform(): void {}
}

describe('StatisticsPageComponent', () => {
  let component: StatisticsPageComponent;
  let fixture: ComponentFixture<StatisticsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        StatisticsPageComponent,
        CustomDropdownComponent,
        MockTranslatePipe,
        SortPipe
      ],
      imports: [ ReactiveFormsModule ],
      providers: [ { provide: Store, useValue: MockStore } ],
      schemas: [ NO_ERRORS_SCHEMA ]
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
