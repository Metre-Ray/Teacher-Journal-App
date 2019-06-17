import { Component, OnInit, Input, OnDestroy} from '@angular/core';
import { Subject } from 'src/app/common/entities/subject';
import { Student } from 'src/app/common/entities/student';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { State } from 'src/app/redux/reducers';
import { Observable, Subscription } from 'rxjs';
import { AddSubjectDate, AddDateOrMarks } from 'src/app/redux/actions/actions';
import { FormControl } from '@angular/forms';
import { IState } from 'src/app/redux/state';
import { validateDate } from 'src/app/common/helpers/validators';

interface ICellData {
  id: string;
  date: string;
  newContent: string;
}

@Component({
  selector: 'app-subject-marks-page',
  templateUrl: './subject-marks-page.component.html',
  styleUrls: ['./subject-marks-page.component.scss']
})
export class SubjectMarksPageComponent implements OnInit, OnDestroy {

  @Input() public subject: string = 'Maths';
  public students: Student[];
  public subjects: Subject[];
  public dates: string[];
  public data$: Observable<IState> = this.store.select(state => state.data);
  public subscription: Subscription;
  public newValues: object = {};
  public modalFlag: boolean = false;
  public teacher: FormControl = new FormControl();

  constructor(private route: ActivatedRoute, private store: Store<State>) { }

  public ngOnInit(): void {
    this.subject = this.route.snapshot.paramMap.get('name');
    this.subscription = this.data$.subscribe((data) => {
      this.students = data.students;
      this.subjects = data.subjects;
      this.subjects.forEach((el) => {
        if (el.name === this.subject) {
          this.dates = el.dates;
        }
      });
    });
  }

  public addDate(open: boolean): void {
    this.modalFlag = open;
  }

  public onDateSubmit(data: string): void {
    this.modalFlag = false;
    if (validateDate(data) && this.dates.indexOf(data) < 0) {
      this.store.dispatch(new AddSubjectDate({subject: this.subject, date: data}));
    }
  }

  public save(event: Event): void {
    event.preventDefault();
    console.log(this.newValues);
    this.store.dispatch(new AddDateOrMarks({subject: this.subject, values: this.newValues}));
  }

  public onEdit(data: ICellData): void {
    if (!this.newValues[data.id]) { this.newValues[data.id] = []; }
    this.newValues[data.id].push([data.date, data.newContent]);
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
