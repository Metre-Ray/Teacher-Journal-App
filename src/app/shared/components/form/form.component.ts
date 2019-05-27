import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() labels: string[] = [];
  @Input() placeholders: string[] = [];
  @Input() required: boolean[] = [];
  @Input() buttonEntrails: string;
  @Output() submitted = new EventEmitter();
  resetValues = {};
  form = new FormGroup({});

  constructor() { }

  ngOnInit() {
    this.addInputs();
  }

  onSubmit(event) {
    event.preventDefault();
    this.submitted.emit(this.form.value);
    this.form.reset(this.resetValues);
  }

  addInputs() {
    this.labels.forEach((label, index) => {
      this.resetValues[`value${index}`] = '';
      if (!this.required[index]) {
        this.form.addControl(`value${index}`, new FormControl(''));
      } else {
        this.form.addControl(`value${index}`, new FormControl('', Validators.required));
      }
    });
  }
}
