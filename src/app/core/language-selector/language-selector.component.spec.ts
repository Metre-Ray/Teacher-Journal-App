import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageSelectorComponent } from './language-selector.component';
import { TranslateService } from '@ngx-translate/core';

describe('LanguageSelectorComponent', () => {
  let component: LanguageSelectorComponent;
  let fixture: ComponentFixture<LanguageSelectorComponent>;
  let translateServiceSpy: jasmine.SpyObj<TranslateService>;

  beforeEach(async(() => {
    // tslint:disable-next-line: no-any
    const spy: any = jasmine.createSpyObj('TranslateService', ['use']);

    TestBed.configureTestingModule({
      declarations: [ LanguageSelectorComponent ],
      imports: [],
      providers: [{ provide: TranslateService, useValue: spy }]
    })
    .compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    translateServiceSpy = TestBed.get(TranslateService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check onItemClick function', () => {
    component.onItemClick(new Event(''), 'en');
    expect(translateServiceSpy.use.calls.count()).toBe(1, 'should call "use" method of translate service');
  });
});
