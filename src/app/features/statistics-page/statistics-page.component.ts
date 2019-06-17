import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/redux/reducers';
import { Observable, Subscription } from 'rxjs';
import { Subject } from 'src/app/common/entities/subject';
import { Student } from 'src/app/common/entities/student';
import { calcAverage } from 'src/app/common/helpers/calculations';

interface IStatData {
  averageMark: number | string;
  rating: number | string;
}

@Component({
  selector: 'app-statistics-page',
  templateUrl: './statistics-page.component.html',
  styleUrls: ['./statistics-page.component.scss']
})
export class StatisticsPageComponent implements OnInit, OnDestroy {

  public students$: Observable<Student[]> = this.store.select(state => state.data.students);
  public subjects$: Observable<Subject[]> = this.store.select(state => state.data.subjects);
  public subscription1: Subscription;
  public subscription2: Subscription;
  public students: Student[];
  public subjects: Subject[];

  public currentStudents: Student[] = [];
  public currentStudent: string = '';
  public listName: string = 'students';
  public dates: string[][];
  public subjectNames: string[];
  public statisticsData: IStatData = {
    averageMark: '',
    rating: ''
  };

  constructor(private store: Store<State>) { }

  public ngOnInit(): void {
    this.subscription1 = this.students$.subscribe((students) => {
      this.students = students;
      this.currentStudents = students;
    });
    this.subscription2 = this.subjects$.subscribe((subjects) => {
      this.subjects = subjects;
      this.dates = this.subjects.map((el) => [...el.dates]);
      this.subjectNames = this.subjects.map((el) => el.name);
    });
  }

  public showStatistics(event: Event): void {
    if (!event || (event.target as HTMLElement).nodeName !== 'LI') { return; }
    const id: string = (event.target as HTMLElement).getAttribute('data-studentid');
    const item: Student = this.currentStudents.find((student) => student.id === id);
    this.currentStudent = `${item.name} ${item.lastName}`;
    const marks: object = item.marks;
    const averageValue: number =  this.calculateAverageMarkOfStudent(marks);
    this.statisticsData.averageMark = averageValue ? averageValue : 'this student doesn\'t have marks';
  }

  public calculateAverageMarkOfStudent(marks: object): number {
    let values: string[] = [];
    for (const i in marks) {
      if (marks.hasOwnProperty(i)) {
        values = values.concat(Object.values((marks[i] as string[])));
      }
    }
    return Math.round(calcAverage(values) * 100) / 100;
  }

  public chooseList(name: string): void {
    this.listName = name;
  }

  public onDropdownSelect(data: string[][]): void {
    this.currentStudents = this.students.filter((student) => {
      for (const elem of data) {
        if (!student.marks[elem[0]] || !Object.keys(student.marks[elem[0]] as string).includes(elem[1])) {
          return false;
        }
      }
      return true;
    });
  }

  public ngOnDestroy(): void {
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
  }
}
