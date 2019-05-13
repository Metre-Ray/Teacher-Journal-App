import { Component, OnInit, Input } from '@angular/core';
import { RequestDataFromServerService } from 'src/app/common/services/request-data-from-server.service';
import { Subject } from 'src/app/common/entities/subject';
import { Student } from 'src/app/common/entities/student';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subject-marks-page',
  templateUrl: './subject-marks-page.component.html',
  styleUrls: ['./subject-marks-page.component.scss']
})
export class SubjectMarksPageComponent implements OnInit {

  students: Student[];
  subjects: Subject[];
  dates: string[];
  @Input() subject = 'Maths';

  constructor(private service: RequestDataFromServerService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.subject = this.route.snapshot.paramMap.get('name');
    this.service.getMockData().subscribe((data) => {
      this.students = data.students;
      this.subjects = data.subjects;
      this.subjects.forEach((el) => {
        if (el.Name === this.subject) {
          this.dates = el.Dates;
        }
      });
    });
  }
}
