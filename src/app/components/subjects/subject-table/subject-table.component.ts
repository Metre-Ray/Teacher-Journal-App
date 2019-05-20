import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Student } from 'src/app/common/entities/student';
import { calcAverage } from 'src/app/common/helpers/calculations';

@Component({
  selector: 'app-subject-table',
  templateUrl: './subject-table.component.html',
  styleUrls: ['./subject-table.component.scss']
})
export class SubjectTableComponent implements OnInit {

  @Input() students: Student[];
  @Input() dates: string[];
  @Input() subject: string;
  @Output() edited = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  calcAverageMark(student): number {
    if (student.Marks[this.subject] === undefined) { return null; }
    return Math.round(calcAverage(Object.values(student.Marks[this.subject])) * 10) / 10;
  }

  onMarkEdit(id, date, event) {
    const newContent = event.target.textContent;
    this.edited.emit({id, date, newContent});
  }

}
