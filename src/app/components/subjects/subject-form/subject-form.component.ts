import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/redux/reducers';
import { AddSubject } from 'src/app/redux/actions/actions';

@Component({
  selector: 'app-subject-form',
  templateUrl: './subject-form.component.html',
  styleUrls: ['./subject-form.component.scss']
})
export class SubjectFormComponent implements OnInit {

  constructor(private store: Store<State>) { }

  ngOnInit() {
  }

  onSubmit(data) {
    const subject = {
      name: data.value0,
      teacher: data.value1,
      room: data.value2,
      description: data.value3
    };
    this.store.dispatch(new AddSubject(subject));
  }
}
