import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/common/entities/student';
import { Store } from '@ngrx/store';
import { State } from 'src/app/redux/reducers';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-statistics-page',
  templateUrl: './statistics-page.component.html',
  styleUrls: ['./statistics-page.component.scss']
})
export class StatisticsPageComponent implements OnInit {

  students$: Observable<Student[]> = this.store.select(state => state.data.students);

  constructor(private store: Store<State>) { }

  ngOnInit() {
  }

}
