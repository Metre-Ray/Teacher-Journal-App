import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomDropdownComponent } from './custom-dropdown.component';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe ({
  name: 'translate'
})
class MockTranslatePipe implements PipeTransform {
  public transform(value: string[]): string[] {
    return value;
  }
}

describe('CustomDropdownComponent', () => {
  let component: CustomDropdownComponent;
  let fixture: ComponentFixture<CustomDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomDropdownComponent, MockTranslatePipe ],
      imports: [ ReactiveFormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    const values1: string[] = ['A', 'B', 'C', 'D'];
    const values2: string[][] = [['a', 'b', 'v'], ['a', 'b', 'v'], ['a', 'b', 'v'], ['a', 'b', 'v']];
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
    const elem: HTMLElement = fixture.nativeElement;
    const groups: NodeList = elem.querySelectorAll('input');
    expect(groups.length).toEqual(1);
  });

  it('check overall amount of inputs', () => {
    component.flag = true;
    component.asDates = false;
    fixture.detectChanges();
    const elem: HTMLElement = fixture.nativeElement;
    const groups: NodeList = elem.querySelectorAll('input');
    expect(groups.length).toEqual(1 + 4);

    component.expandAll(true);
    fixture.detectChanges();
    const groups2: NodeList = elem.querySelectorAll('input');
    expect(groups2.length).toEqual(1 + 4 + 4 * 3);
  });

  it('check dropdown button', () => {
    const btn: HTMLElement = fixture.nativeElement.querySelector('.top-container__btn');
    let checkboxContainer: HTMLElement = fixture.nativeElement.querySelector('.content-container');
    // tslint:disable-next-line: no-null-keyword
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
    const btn: HTMLElement = fixture.nativeElement.querySelector('.head-container span');
    btn.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    const inputs: NodeListOf<HTMLInputElement> = fixture.nativeElement.querySelectorAll('.content-container input');
    inputs.forEach(element => {
      expect(element.checked).toBe(true);
    });
  });

  it('should emit on form value change', fakeAsync(() => {
    component.flag = true;
    component.asDates = false;
    spyOn(component.selected, 'emit');
    fixture.detectChanges();

    const btn: HTMLElement = fixture.nativeElement.querySelector('.head-container span');
    expect(component.selected.emit).not.toHaveBeenCalled();

    btn.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    tick(200);
    expect(component.selected.emit).toHaveBeenCalled();

    const input: HTMLInputElement = fixture.nativeElement.querySelector('form input');

    input.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    tick(200);
    expect(input.checked).toBeTruthy();
    expect(component.selected.emit).toHaveBeenCalledTimes(2);
  }));

});
