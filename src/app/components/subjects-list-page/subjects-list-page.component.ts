import { Component, OnInit } from '@angular/core';
import { RequestDataFromServerService } from 'src/app/common/services/request-data-from-server.service';
import { Subject } from 'src/app/common/entities/subject';

@Component({
  selector: 'app-subjects-list-page',
  templateUrl: './subjects-list-page.component.html',
  styleUrls: ['./subjects-list-page.component.scss']
})
export class SubjectsListPageComponent implements OnInit {

  subjects: Subject[];

  constructor(private service: RequestDataFromServerService) { }

  ngOnInit() {
    this.service.getMockData().subscribe((data) => {
      this.subjects = data.subjects;
    });
  }

}
