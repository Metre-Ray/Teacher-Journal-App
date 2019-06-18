import { Component } from '@angular/core';
import { Student } from 'src/app/common/entities/student';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from 'src/app/redux/reducers';
import { DeleteStudent } from 'src/app/redux/actions/actions';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.scss']
})
export class StudentPageComponent {

  public showModalFlag: boolean = false;
  public student: Student;

  public students$: Observable<Student[]> = this.store.select(state => state.data.students);

  constructor(private store: Store<State>) { }

  public onStudentRemove(student: Student): void {
    if (!this.showModalFlag) {
      this.student = student;
      this.showModal();
    }
  }

  public removeStudent(): void {
    this.store.dispatch(new DeleteStudent(this.student));
    this.showModal();
  }

  public showModal(): void {
    this.showModalFlag = !this.showModalFlag;
  }
}
