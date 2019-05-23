import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() label1: string;
  @Input() label2: string;
  @Input() label3: string;
  @Input() label4: string;
  @Input() place1: string;
  @Input() place2: string;
  @Input() place3: string;
  @Input() place4: string;
  @Input() buttonEntrails: string;
  @Output() submitted = new EventEmitter();
  form = new FormGroup({
    value0: new FormControl('', Validators.required),
    value1: new FormControl('', Validators.required),
    value2: new FormControl(''),
    value3: new FormControl('')
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit(event) {
    event.preventDefault();
    this.submitted.emit(this.form.value);
    this.form.setValue({
      value0: '',
      value1: '',
      value2: '',
      value3: ''
    });
  }
}
