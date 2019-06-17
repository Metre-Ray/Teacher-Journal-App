import { Component, OnInit, Output, EventEmitter, Input, OnChanges, OnDestroy } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-custom-dropdown',
  templateUrl: './custom-dropdown.component.html',
  styleUrls: ['./custom-dropdown.component.scss'],
})
export class CustomDropdownComponent implements OnInit, OnChanges, OnDestroy {

  @Output() public selected: EventEmitter<string[][]> = new EventEmitter();
  @Input() public values1: string[] = [];
  @Input() public values2: string[][] = [];
  @Input() public asDates: boolean = true;
  public subscription: Subscription;

  public form: FormGroup = this.fb.group({
    top_array: this.fb.array([])
  });
  public inputControl: FormControl = this.fb.control({value: '', disabled: true});
  public flag: boolean = false;

  constructor(private fb: FormBuilder) {}

  private addNewGroupOfFormControls(): void {
    this.values1.forEach((value, index) => {
      const newGroup: FormGroup = this.createSubjectGroup();
      this.values2[index].forEach(() => {
        const newControl: FormControl = this.fb.control(false);
        (newGroup.get('subarray') as FormArray).push(newControl);
      });
      (this.form.get('top_array') as FormArray).push(newGroup);
    });
  }

  private collectResultAndEmit(value: IFormValue): void {
    const result: string[][] = [];
    value.top_array.forEach((group, i) => {
      group.subarray.forEach((control, j) => {
        if (control === true) {
          const temp1: string = this.values1[i];
          const temp2: string = this.values2[i][j];
          result.push([temp1, temp2]);
        }
      });
    });
    this.inputControl.setValue(result.map((el => `${el[0]}: ${el[1]}`)).join('; '));
    this.selected.emit(result);
  }

  public ngOnChanges(): void {
    this.addNewGroupOfFormControls();
  }

  public ngOnInit(): void {
    this.subscription = this.form.valueChanges
      .pipe(debounceTime(200))
      .subscribe((value) => {
        this.collectResultAndEmit(value);
      });
  }

  public createSubjectGroup(): FormGroup {
    return this.fb.group({
      name: this.fb.control(false),
      subarray: this.fb.array([])
    });
  }

  public toggleDropDown(): void {
    this.flag = !this.flag;
  }

  public checkAll(value: boolean): void {
    const groups: AbstractControl[] = (this.form.get('top_array') as FormArray).controls;
    for (const element of groups) {
      element.get('name').setValue(value);
      (element.get('subarray') as FormArray).controls
        .forEach((item) => item.setValue(value));
    }
  }

  public expandAll(value: boolean): void {
    (this.form.get('top_array') as FormArray).controls
      .forEach((element) => element.get('name').setValue(value));
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}

interface IFormValue {
  top_array: { name: string, subarray: boolean[] }[];
}
