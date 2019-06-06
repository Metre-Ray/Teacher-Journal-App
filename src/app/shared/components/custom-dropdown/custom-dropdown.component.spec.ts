import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomDropdownComponent } from './custom-dropdown.component';


describe('CustomDropdownComponent', () => {
  let component: CustomDropdownComponent;
  let fixture: ComponentFixture<CustomDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomDropdownComponent ],
      imports: [ ReactiveFormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    const values1 = ['A', 'B', 'C', 'D'];
    const values2 = [['a', 'b', 'v'], ['a', 'b', 'v'], ['a', 'b', 'v'], ['a', 'b', 'v']];
    component.values1 = values1;
    component.values2 = values2;
    component.ngOnChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create right amount of controls', () => {
    fixture.detectChanges();
    expect(component.form.value.top_array.length).toEqual(4);
    expect(component.form.value.top_array[0].subarray.length).toEqual(3);
  });

  it('should create one input by default', () => {
    fixture.detectChanges();
    const elem = fixture.nativeElement;
    const groups = elem.querySelectorAll('input');
    expect(groups.length).toEqual(1);
  });

  it('check overall amount of inputs', () => {
    component.flag = true;
    component.asDates = false;
    fixture.detectChanges();
    const elem = fixture.nativeElement;
    const groups = elem.querySelectorAll('input');
    expect(groups.length).toEqual(1 + 4);

    component.expandAll(true);
    fixture.detectChanges();
    const groups2 = elem.querySelectorAll('input');
    expect(groups2.length).toEqual(1 + 4 + 4 * 3);
  });

  it('check dropdown button', () => {
    const btn = fixture.nativeElement.querySelector('.top-container__btn');
    let checkboxContainer = fixture.nativeElement.querySelector('.content-container');
    expect(checkboxContainer).toBe(null);

    btn.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    checkboxContainer = fixture.nativeElement.querySelector('.content-container');
    expect(checkboxContainer).toBeTruthy();
  });

  it('check checkAll button', () => {
    component.flag = true;
    component.asDates = false;
    fixture.detectChanges();
    const btn = fixture.nativeElement.querySelector('.head-container span');
    btn.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    const inputs = fixture.nativeElement.querySelectorAll('.content-container input');
    inputs.forEach(element => {
      expect(element.checked).toBe(true);
    });
  });

});
