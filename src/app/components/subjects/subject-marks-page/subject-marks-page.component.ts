import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'src/app/common/entities/subject';
import { Student } from 'src/app/common/entities/student';
import { ActivatedRoute } from '@angular/router';
import { OurData } from 'src/app/common/entities/data';
import { Store } from '@ngrx/store';
import { State } from 'src/app/redux/reducers';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-subject-marks-page',
  templateUrl: './subject-marks-page.component.html',
  styleUrls: ['./subject-marks-page.component.scss']
})
export class SubjectMarksPageComponent implements OnInit {

  students: Student[];
  subjects: Subject[];
  dates: string[];
  @Input() subject = 'Maths';
  data: Observable<OurData> = this.store.select(state => state.data);

  constructor(private route: ActivatedRoute, private store: Store<State>) { }

  ngOnInit() {
    this.subject = this.route.snapshot.paramMap.get('name');
    this.data.subscribe((data) => {
      this.students = data.students;
      this.subjects = data.subjects;
      this.subjects.forEach((el) => {
        if (el.Name === this.subject) {
          this.dates = el.Dates;
        }
      });
    });
  }
}
