import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

interface IFormData {
  value0?: string;
  value1?: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() public labels: string[] = [];
  @Input() public placeholders: string[] = [];
  @Input() public required: boolean[] = [];
  @Input() public buttonName: string;
  @Output() public submitted: EventEmitter<IFormData> = new EventEmitter();
  public resetValues: IFormData = {};
  public form: FormGroup = new FormGroup({});

  private addControls(): void {
    this.labels.forEach((label, index) => {
      this.resetValues[`value${index}`] = '';
      if (!this.required[index]) {
        this.form.addControl(`value${index}`, new FormControl(''));
      } else {
        this.form.addControl(`value${index}`, new FormControl(
          '',
          [Validators.required, Validators.pattern('^[a-zA-Zа-яА-Я][a-zA-Zа-яА-Я \'-]*$'), Validators.maxLength(100)]
        ));
      }
    });
  }

  public ngOnInit(): void {
    this.addControls();
  }

  public onSubmit(event: Event): void {
    event.preventDefault();
    this.submitted.emit(this.form.value);
    this.form.reset(this.resetValues);
  }
}
