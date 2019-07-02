import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/redux/reducers';
import { Observable, Subscription } from 'rxjs';
import { Subject } from 'src/app/common/entities/subject';
import { Student } from 'src/app/common/entities/student';
import { calcAverage } from 'src/app/common/helpers/calculations';
import { IMark } from 'src/app/common/entities/mark';

@Component({
  selector: 'app-statistics-page',
  templateUrl: './statistics-page.component.html',
  styleUrls: ['./statistics-page.component.scss']
})
export class StatisticsPageComponent implements OnInit, OnDestroy {

  private listNames: string[] = ['students', 'subjects'];

  public students$: Observable<Student[]> = this.store.select(state => state.data.students);
  public subjects$: Observable<Subject[]> = this.store.select(state => state.data.subjects);
  public subscription1: Subscription;
  public subscription2: Subscription;
  public students: Student[];
  public subjects: Subject[];

  public currentStudents: Student[] = [];
  public currentStudent: string = '';
  public listName: string = this.listNames[0];
  public dates: string[][];
  public subjectNames: string[];
  public statisticsData: IStatData = {
    averageMark: '',
    rating: ''
  };
  public chartData: {name: string, x: number}[] = [];

  constructor(private store: Store<State>) { }

  private studentAttendedAndGotMark(student: Student, data: string[][]): boolean {
    for (const elem of data) {
      if (!student.marks[elem[0]] || !Object.keys(student.marks[elem[0]] as string).includes(elem[1])) {
        return false;
      }
    }
    return true;
  }

  private calculateAverageMarkOfStudent(marks: IMark): number {
    let values: string[] = [];
    for (const i in marks) {
      if (marks.hasOwnProperty(i)) {
        values = values.concat(Object.values((marks[i] as string[])));
      }
    }
    return Math.round(calcAverage(values) * 100) / 100;
  }

  private createChartDataForSubject(item: Subject): void {
    this.chartData = [];
    this.students.forEach((student) => {
      if (student.marks[item.name]) {
        this.chartData.push({
          name: student.name,
          x: Math.round(calcAverage(Object.values(student.marks[item.name])) * 100) / 100
        });
      }
    });
  }

  private createChartDataForStudent(item: Student): void {
    const marks: IMark = item.marks;
    this.chartData = [];
    for (const subject in marks) {
      if (marks.hasOwnProperty(subject)) {
        this.chartData.push({
          name: subject,
          x: Math.round(calcAverage(Object.values(marks[subject])) * 100) / 100
        });
      }
    }
  }

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

  public showStatistics(item: Student | Subject): void {
    if (!item) { return; }
    if (this.listName === this.listNames[0]) {
      const message: string = 'this student doesn\'t have marks';
      const marks: IMark = (item as Student).marks;
      const averageValue: number =  this.calculateAverageMarkOfStudent(marks);
      this.currentStudent = `${item.name} ${(item as Student).lastName}`;
      this.statisticsData.averageMark = averageValue ? averageValue : message;
      this.createChartDataForStudent(item as Student);
    }
    if (this.listName === this.listNames[1]) {
      this.createChartDataForSubject(item as Subject);
    }
  }

  public chooseList(name: string): void {
    this.listName = name;
    this.statisticsData.averageMark = '';
  }

  public onDropdownSelect(data: string[][]): void {
    this.currentStudents = this.students.filter((student) => {
      return this.studentAttendedAndGotMark(student, data);
    });
  }

  public ngOnDestroy(): void {
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
  }
}

interface IStatData {
  averageMark: number | string;
  rating: number | string;
}
