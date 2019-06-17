import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-date-form',
  templateUrl: './new-date-form.component.html',
  styleUrls: ['./new-date-form.component.scss']
})
export class NewDateFormComponent {

  @Output() public submitted: EventEmitter<Event> = new EventEmitter();
  @Output() public closed: EventEmitter<Event> = new EventEmitter();
  public form: FormGroup = new FormGroup({
    date: new FormControl('')
  });

  public onSubmit(event: Event): void {
    event.preventDefault();
    this.submitted.emit(this.form.value.date);
  }

  public onClose(): void {
    this.closed.emit();
  }

}
