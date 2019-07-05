import { Component, Input, Output, EventEmitter, Renderer2, ɵConsole } from '@angular/core';
import { Student } from 'src/app/common/entities/student';
import { calcAverage } from 'src/app/common/helpers/calculations';
import { validateMark } from 'src/app/common/helpers/validators';

interface ICellData {
  id: string;
  date: string;
  newContent: string;
}

@Component({
  selector: 'app-subject-table',
  templateUrl: './subject-table.component.html',
  styleUrls: ['./subject-table.component.scss']
})
export class SubjectTableComponent {

  @Input() public students: Student[];
  @Input() public dates: string[];
  @Input() public subject: string;
  @Output() public edited: EventEmitter<ICellData> = new EventEmitter();
  @Output() public columnDeleted: EventEmitter<string> = new EventEmitter();

  constructor(private renderer: Renderer2) {
  }

  public calcAverageMark(marks: object): number | string {
    if (!marks || !marks[this.subject] || Object.keys(marks[this.subject] ).length === 0) { return ''; }
    return Math.round(calcAverage(Object.values(marks[this.subject])) * 10) / 10;
  }

  public onMarkEdit(id: string, date: string, event: Event): void {
    let newContent: string = (event.target as HTMLElement).textContent;
    if (newContent === '' || newContent[0] === '*' || (newContent[0] === ' ' && newContent[1] === '*') || validateMark(newContent)) {
      if (newContent[0] === ' ') {
        newContent = newContent.slice(1);
      }
      this.renderer.removeClass((event.target as HTMLElement), 'invalid');
      this.edited.emit({id, date, newContent});
    } else {
      this.renderer.addClass((event.target as HTMLElement), 'invalid');
    }
  }

  public onColumnDelete(data: string, event: Event): void {
    this.columnDeleted.emit(data);
  }

}
