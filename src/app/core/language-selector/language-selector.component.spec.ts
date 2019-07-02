import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LanguageSelectorComponent } from './language-selector.component';
import { TranslateService } from '@ngx-translate/core';

describe('LanguageSelectorComponent', () => {
  let component: LanguageSelectorComponent;
  let fixture: ComponentFixture<LanguageSelectorComponent>;
  let translateServiceSpy: jasmine.SpyObj<TranslateService>;

  beforeEach(async(() => {
    const translateSpy: jasmine.SpyObj<TranslateService> = jasmine.createSpyObj('TranslateService', ['use']);

    TestBed.configureTestingModule({
      declarations: [ LanguageSelectorComponent ],
      imports: [],
      providers: [{ provide: TranslateService, useValue: translateSpy }]
    })
    .compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check onItemClick function', () => {
    translateServiceSpy = TestBed.get(TranslateService);
    component.onItemClick(new Event(''), 'en');
    expect(translateServiceSpy.use.calls.count()).toBe(1, 'should call "use" method of translate service');
    expect(component.label).toBe('English');
    component.onItemClick(new Event(''), 'ru');
    expect(translateServiceSpy.use.calls.count()).toBe(2, 'should call "use" method of translate service twice');
    expect(component.label).toBe('Русский');
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('Русский', 'should change text content of the element');
  });

  it('check showMenu function', () => {
    expect(fixture.nativeElement.querySelector('.dropdown__content')).toBeFalsy();
    component.showMenu();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.dropdown__content')).toBeTruthy();
  });

  it('should show dropdown menu on button click', () => {
    expect(fixture.nativeElement.querySelector('.dropdown__content')).toBeFalsy();
    const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    button.click();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.dropdown__content')).toBeTruthy();
    button.click();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.dropdown__content')).toBeFalsy();
  });
});
