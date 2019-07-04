import { Component } from '@angular/core';
import { Subject } from 'src/app/common/entities/subject';
import { Store } from '@ngrx/store';
import { State } from 'src/app/redux/reducers';
import { Observable } from 'rxjs';
import { DeleteSubject } from 'src/app/redux/actions/actions';

@Component({
  selector: 'app-subjects-list-page',
  templateUrl: './subjects-list-page.component.html',
  styleUrls: ['./subjects-list-page.component.scss']
})
export class SubjectsListPageComponent {

  public modalFlag: boolean = false;
  public subjects$: Observable<Subject[]> = this.store.select(state => state.data.subjects);

  constructor(private store: Store<State>) { }

  public showModal(): void {
    this.modalFlag = !this.modalFlag;
  }

  public deleteSubject(subjectName: string): void {
    if (subjectName) {
      this.store.dispatch(new DeleteSubject(subjectName));
    }
    this.showModal();
  }

}
