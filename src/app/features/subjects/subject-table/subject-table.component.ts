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

  calcAverageMark(marks: object): number | string {
    if (!marks || !marks[this.subject] || Object.keys(marks[this.subject] ).length === 0) { return ''; }
    return Math.round(calcAverage(Object.values(marks[this.subject])) * 10) / 10;
  }

  onMarkEdit(id: string, date: string, event: Event) {
    const newContent = (event.target as HTMLElement).textContent;
    this.edited.emit({id, date, newContent});
  }

}
