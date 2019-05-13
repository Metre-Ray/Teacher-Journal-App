import { Component, OnInit } from '@angular/core';
import { RequestDataFromServerService } from 'src/app/common/services/request-data-from-server.service';
import { Student } from 'src/app/common/entities/student';

@Component({
  selector: 'app-statistics-page',
  templateUrl: './statistics-page.component.html',
  styleUrls: ['./statistics-page.component.scss']
})
export class StatisticsPageComponent implements OnInit {

  students: Student[];

  constructor(private service: RequestDataFromServerService) { }

  ngOnInit() {
    this.service.getMockData().subscribe(data => {
      this.students = data.students;
    });
  }

}
