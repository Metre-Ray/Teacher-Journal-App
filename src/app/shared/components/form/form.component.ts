import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

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
  @Output() submitted = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(event) {
    event.preventDefault();
    const data = {
      value0: event.target[0].value,
      value1: event.target[1].value,
      value2: event.target[2].value,
      value3: event.target[3].value
    };
    event.target[0].value = '';
    event.target[1].value = '';
    event.target[2].value = '';
    event.target[3].value = '';
    this.submitted.emit(data);
  }
}
