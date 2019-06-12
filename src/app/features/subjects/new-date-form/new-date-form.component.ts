import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-date-form',
  templateUrl: './new-date-form.component.html',
  styleUrls: ['./new-date-form.component.scss']
})
export class NewDateFormComponent implements OnInit {

  @Output() submitted = new EventEmitter();
  @Output() closed = new EventEmitter();
  form = new FormGroup({
    date: new FormControl('')
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit(event: Event) {
    event.preventDefault();
    this.submitted.emit(this.form.value.date);
  }

  onClose() {
    this.closed.emit();
  }

}
