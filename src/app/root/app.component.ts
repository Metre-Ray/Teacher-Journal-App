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

  constructor(private store: Store<State>, private translate: TranslateService) {
  }

  public ngOnInit(): void {
    this.translate.addLangs(['en', 'ru']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
    this.store.dispatch(new LoadDataRequest());
  }
}
