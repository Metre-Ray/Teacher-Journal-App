import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../redux/reducers';
import { LoadDataRequest } from '../redux/actions/actions';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private store: Store<State>, translate: TranslateService) {
    translate.addLangs(['en', 'ru']);
    translate.setDefaultLang('en');
    translate.use('en');
  }

  public ngOnInit(): void {
    this.store.dispatch(new LoadDataRequest());
  }
}
