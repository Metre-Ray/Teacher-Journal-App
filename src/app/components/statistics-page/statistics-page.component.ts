import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/redux/reducers';
import { Observable, Subscription } from 'rxjs';
import { Subject } from 'src/app/common/entities/subject';
import { Student } from 'src/app/common/entities/student';

@Component({
  selector: 'app-statistics-page',
  templateUrl: './statistics-page.component.html',
  styleUrls: ['./statistics-page.component.scss']
})
export class StatisticsPageComponent implements OnInit, OnDestroy {

  students$: Observable<Student[]> = this.store.select(state => state.data.students);
  subjects$: Observable<Subject[]> = this.store.select(state => state.data.subjects);
  subscription1: Subscription;
  subscription2: Subscription;
  students: Student[];
  subjects: Subject[];
  currentStudents: Student[] = [];
  listName = 'students';
  dates: string[][];
  subjectNames: string[];

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.subscription1 = this.students$.subscribe((students) => {
      this.students = students;
      this.currentStudents = students;
    });
    this.subscription2 = this.subjects$.subscribe((subjects) => {
      this.subjects = subjects;
      this.dates = this.subjects.map((el) => [...el.Dates]);
      this.subjectNames = this.subjects.map((el) => el.Name);
    });
  }

  showStatistics(item) {    // TODO
    if (item instanceof Student) {
    } else if (item instanceof Subject) {
    }
  }

  chooseList(name: string) {
    this.listName = name;
  }

  onDropdownSelect(data) {
    this.currentStudents = this.students.filter((student) => {
      for (const elem of data) {
        if (!Object.keys(student.Marks[elem[0]]).includes(elem[1])) {
          return false;
        }
      }
      return true;
    });
  }

  ngOnDestroy() {
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
  }
}
