import { Component, OnInit, Input, OnDestroy} from '@angular/core';
import { Subject } from 'src/app/common/entities/subject';
import { Student } from 'src/app/common/entities/student';
import { ActivatedRoute } from '@angular/router';
import { OurData } from 'src/app/common/entities/data';
import { Store } from '@ngrx/store';
import { State } from 'src/app/redux/reducers';
import { Observable, Subscription } from 'rxjs';
import { AddSubjectDate, AddDateOrMarks } from 'src/app/redux/actions/actions';
import { FormControl } from '@angular/forms';


interface CellData {
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

  @Input() subject = 'Maths';
  students: Student[];
  subjects: Subject[];
  dates: string[];
  data$: Observable<OurData> = this.store.select(state => state.data);
  subscription: Subscription;
  newValues = {};
  modalFlag = false;
  teacher = new FormControl();

  constructor(private route: ActivatedRoute, private store: Store<State>) { }

  ngOnInit() {
    this.subject = this.route.snapshot.paramMap.get('name');
    this.subscription = this.data$.subscribe((data) => {
      this.students = data.students;
      this.subjects = data.subjects;
      this.subjects.forEach((el) => {
        if (el.Name === this.subject) {
          this.dates = el.Dates;
        }
      });
    });
  }

  addDate() {
    this.modalFlag = true;
  }

  onDateSubmit(data: string) {
    this.modalFlag = false;
    this.store.dispatch(new AddSubjectDate({subject: this.subject, date: data}));
  }

  onModalClose() {
    this.modalFlag = false;
  }

  save(event: Event) {
    event.preventDefault();
    this.store.dispatch(new AddDateOrMarks({subject: this.subject, values: this.newValues}));
  }

  onEdit(data: CellData) {
    this.newValues[data.id] = [data.date, data.newContent];
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
