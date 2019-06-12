import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/redux/reducers';
import { Observable, Subscription } from 'rxjs';
import { Subject } from 'src/app/common/entities/subject';
import { Student } from 'src/app/common/entities/student';
import { calcAverage } from 'src/app/common/helpers/calculations';


interface StatData {
  averageMark: number | string;
  rating: number | string;
}

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
  currentStudent = '';
  listName = 'students';
  dates: string[][];
  subjectNames: string[];
  statisticsData: StatData = {
    averageMark: '',
    rating: ''
  };

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

  showStatistics(event: Event) {
    if (!event || (event.target as HTMLElement).nodeName !== 'LI') { return; }
    const id = (event.target as HTMLElement).getAttribute('data-studentid');
    const item = this.currentStudents.find((student) => student.Id === id);
    this.currentStudent = `${item.Name} ${item['Last name']}`;
    const marks = item.Marks;
    const averageValue =  this.calculateAverageMarkOfStudent(marks);
    this.statisticsData.averageMark = averageValue ? averageValue : 'this student doesn\'t have marks';
  }

  calculateAverageMarkOfStudent(marks: object) {
    let values = [];
    for (const i in marks) {
      if (marks.hasOwnProperty(i)) {
        values = values.concat(Object.values((marks[i] as string[])));
      }
    }
    return Math.round(calcAverage(values) * 100) / 100;
  }

  chooseList(name: string) {
    this.listName = name;
  }

  onDropdownSelect(data: string[][]) {
    this.currentStudents = this.students.filter((student) => {
      for (const elem of data) {
        if (!student.Marks[elem[0]] || !Object.keys(student.Marks[elem[0]] as string).includes(elem[1])) {
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
