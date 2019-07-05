import { Component, OnInit, OnDestroy} from '@angular/core';
import { Subject } from 'src/app/common/entities/subject';
import { Student } from 'src/app/common/entities/student';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { State } from 'src/app/redux/reducers';
import { Observable, Subscription } from 'rxjs';
import { AddSubjectDate, AddDateOrMarks, DeleteDate } from 'src/app/redux/actions/actions';
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

  private routeParameterName: string = 'name';
  private pathIfSubjectNotExists: string = '/subjects';

  public subject: string = 'Maths';
  public students: Student[];
  public subjects: Subject[];
  public dates: string[];
  public data$: Observable<IState> = this.store.select(state => state.data);
  public subscription: Subscription;
  public newValues: object = {};
  public modalFlag: boolean = false;
  public teacher: FormControl = new FormControl();

  constructor(private route: ActivatedRoute,  private router: Router, private store: Store<State>) { }

  private addNewMark(data: ICellData): void {
    if (!this.newValues[data.id]) { this.newValues[data.id] = []; }
    this.newValues[data.id].push([data.date, data.newContent]);
  }

  public ngOnInit(): void {
    this.subject = this.route.snapshot.paramMap.get(this.routeParameterName);
    this.subscription = this.data$.subscribe((data) => {
      this.students = data.students;
      this.subjects = data.subjects;
      this.subjects.forEach((el) => {
        if (el.name === this.subject) {
          this.dates = el.dates;
        }
      });
    });
    if (!this.dates) {
      this.router.navigate([this.pathIfSubjectNotExists]);
    }
  }

  public showModal(flag: boolean): void {
    this.modalFlag = flag;
  }

  public addDate(date: string): void {
    this.modalFlag = false;
    if (validateDate(date) && this.dates.indexOf(date) < 0) {
      this.store.dispatch(new AddSubjectDate({subject: this.subject, date}));
    }
  }

  public deleteDate(date: string): void {
    this.store.dispatch(new DeleteDate({subject: this.subject, date}));
  }

  public onEdit(data: ICellData): void {
    this.addNewMark(data);
  }

  public save(event: Event): void {
    event.preventDefault();
    this.store.dispatch(new AddDateOrMarks({subject: this.subject, values: this.newValues}));
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
