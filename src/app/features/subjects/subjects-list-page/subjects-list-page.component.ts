import { Component, OnInit } from '@angular/core';
import { Subject } from 'src/app/common/entities/subject';
import { Store } from '@ngrx/store';
import { State } from 'src/app/redux/reducers';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-subjects-list-page',
  templateUrl: './subjects-list-page.component.html',
  styleUrls: ['./subjects-list-page.component.scss']
})
export class SubjectsListPageComponent implements OnInit {

  subjects$: Observable<Subject[]> = this.store.select(state => state.data.subjects);

  constructor(private store: Store<State>) { }

  ngOnInit() {
  }

}
