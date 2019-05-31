import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadComponent } from './head.component';
import { LanguageSelectorComponent } from '../language-selector/language-selector.component';
import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'translate'
})
class TranslatePipe implements PipeTransform {
  transform(value: Array<string | object>, field?: string): Array<string | object> {
    return value;
  }
}

class MockTranslateService {
  static use() {}
  static setDefaultLang() {}
  static addLangs() {}
}



describe('HeadComponent', () => {
  let component: HeadComponent;
  let fixture: ComponentFixture<HeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeadComponent,
        LanguageSelectorComponent,
        TranslatePipe
      ],
      imports: [],
      providers: [{ provide: TranslateService, useValue: MockTranslateService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
