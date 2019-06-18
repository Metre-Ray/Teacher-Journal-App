import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Student } from '../../../common/entities/student';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss']
})
export class StudentTableComponent {

  @Input() public students: Student[];
  @Output() public removed: EventEmitter<Student> = new EventEmitter();

  public removeRow(student: Student): void {
    this.removed.emit(student);
  }
}
