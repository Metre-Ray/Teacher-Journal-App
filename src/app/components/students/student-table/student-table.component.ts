import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../../../common/entities/student';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss']
})
export class StudentTableComponent implements OnInit {

  @Input() students: Student[];

  constructor() { }

  ngOnInit() {
  }

}
