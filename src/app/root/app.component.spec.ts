import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeadComponent } from '../core/head/head.component';
import { PanelComponent } from '../core/panel/panel.component';
import { Pipe, PipeTransform } from '@angular/core';
import { LanguageSelectorComponent } from '../core/language-selector/language-selector.component';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { ComponentInstance } from '@angular/core/src/render3/interfaces/player';

@Pipe ({
  name: 'translate'
})
class TranslatePipe implements PipeTransform {
  public transform(value: string[]): string[] {
    return value;
  }
}

class MockStore {
  public dispatch(): void {}
}

class MockTranslateService {
  public static use(): void {}
  public static setDefaultLang(): void {}
  public static addLangs(): void {}
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
    const fixture: ComponentFixture<AppComponent> = TestBed.createComponent(AppComponent);
    const app: ComponentInstance = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
