import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeadComponent } from '../core/head/head.component';
import { PanelComponent } from '../core/panel/panel.component';
import { Pipe, PipeTransform } from '@angular/core';
import { LanguageSelectorComponent } from '../core/language-selector/language-selector.component';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';


@Pipe ({
  name: 'translate'
})
class TranslatePipe implements PipeTransform {
  // tslint:disable-next-line: no-any
  transform(value: any[]) {
    return value;
  }
}

class MockStore {
  dispatch() {}
}

class MockTranslateService {
  static use() {}
  static setDefaultLang() {}
  static addLangs() {}
}

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        HeadComponent,
        PanelComponent,
        TranslatePipe,
        LanguageSelectorComponent
      ],
      providers: [
        { provide: Store, useValue: MockStore },
        { provide: TranslateService, useValue: MockTranslateService}
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
