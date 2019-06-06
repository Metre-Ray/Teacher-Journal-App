import { Component, OnInit, Output, EventEmitter, Input, OnChanges, OnDestroy } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-custom-dropdown',
  templateUrl: './custom-dropdown.component.html',
  styleUrls: ['./custom-dropdown.component.scss'],
})
export class CustomDropdownComponent implements OnInit, OnChanges, OnDestroy {

  @Output() selected = new EventEmitter();
  @Input() values1: string[] = [];
  @Input() values2: string[][] = [];
  @Input() asDates = true;
  subscription: Subscription;

  form = this.fb.group({
    top_array: this.fb.array([])
  });
  inputControl = this.fb.control({value: '', disabled: true});
  flag = false;

  constructor(private fb: FormBuilder) { }

  ngOnChanges() {
    this.values1.forEach((value, index) => {
      const newGroup = this.createSubjectGroup();
      this.values2[index].forEach(() => {
        const newControl = this.fb.control(false);
        (newGroup.get('subarray') as FormArray).push(newControl);
      });
      (this.form.get('top_array') as FormArray).push(newGroup);
    });
  }

  ngOnInit() {
    this.subscription = this.form.valueChanges
      .pipe(debounceTime(200))
      .subscribe((value) => {
        const result = [];
        value.top_array.forEach((item, i) => {
          item.subarray.forEach((val, j) => {
            if (val === true) {
              const temp1 = this.values1[i];
              const temp2 = this.values2[i][j];
              result.push([temp1, temp2]);
            }
          });
        });
        this.inputControl.setValue(result.map((el => `${el[0]}: ${el[1]}`)).join('; '));
        this.selected.emit(result);
      });
  }

  createSubjectGroup() {
    return this.fb.group({
      name: this.fb.control(false),
      subarray: this.fb.array([])
    });
  }

  toggleDropDown() {
    this.flag = !this.flag;
  }

  checkAll(value: boolean) {
    const groups = (this.form.get('top_array') as FormArray).controls;
    for (const element of groups) {
      element.get('name').setValue(value);
      (element.get('subarray') as FormArray).controls
        .forEach((item) => item.setValue(value));
    }
  }

  expandAll(value: boolean) {
    (this.form.get('top_array') as FormArray).controls
      .forEach((element) => element.get('name').setValue(value));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
