import { Component, OnInit, Input, Renderer2 } from '@angular/core';
import { Student } from '../../../common/entities/student';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss']
})
export class StudentTableComponent implements OnInit {

  @Input() students: Student[];

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

  onRowClick(event) {
    const target = event.currentTarget;
    if (target.classList.contains('selected')) {
      this.renderer.removeClass(target, 'selected');
    } else { this.renderer.addClass(target, 'selected'); }
  }

}
