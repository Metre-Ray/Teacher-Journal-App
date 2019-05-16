import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/redux/reducers';
import { AddStudent } from 'src/app/redux/actions/actions';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {

  constructor(private store: Store<State>) { }

  ngOnInit() {
  }

  onSubmit(event) {
    const data = {
      name: event.value0,
      surname:  event.value1,
      address: event.value2,
      description: event.value3
    };
    this.store.dispatch(new AddStudent(data));
  }
}
