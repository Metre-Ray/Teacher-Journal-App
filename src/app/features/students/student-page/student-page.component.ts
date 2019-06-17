import { Component } from '@angular/core';
import { Student } from 'src/app/common/entities/student';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from 'src/app/redux/reducers';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.scss']
})
export class StudentPageComponent {

  public students$: Observable<Student[]> = this.store.select(state => state.data.students);

  constructor(private store: Store<State>) { }
}
