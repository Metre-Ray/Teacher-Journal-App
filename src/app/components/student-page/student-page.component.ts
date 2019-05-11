import { Component, OnInit } from '@angular/core';
import { RequestDataFromServerService } from 'src/app/common/services/request-data-from-server.service';
import { Student } from 'src/app/common/entities/student';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.scss']
})
export class StudentPageComponent implements OnInit {

  students: Student[];

  constructor(private service: RequestDataFromServerService) { }

  ngOnInit() {
    this.service.getMockData().subscribe((data) => {
      this.students = data.students;
      console.log(data);
    });
  }
}
