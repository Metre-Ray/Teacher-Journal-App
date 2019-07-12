import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

interface IFormData {
  [valueNumber: string]: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() public labels: {
    type: string,
    name: string,
    placeholder: string,
    required: boolean
  }[] = [];
  @Input() public buttonName: string;
  @Output() public submitted: EventEmitter<IFormData> = new EventEmitter();

  public resetValues: IFormData = {};
  public inputPattern: string = '^[a-zA-Zа-яА-Я][a-zA-Zа-яА-Я \'-]*$';
  public form: FormGroup = new FormGroup({});

  private addControls(): void {
    this.labels.forEach((label, index) => {
      this.resetValues[`value${index}`] = '';
      if (!label.required) {
        this.form.addControl(`value${index}`, new FormControl(''));
      } else {
        this.form.addControl(`value${index}`, new FormControl(
          '',
          [Validators.required, Validators.pattern(this.inputPattern), Validators.maxLength(100)]
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
