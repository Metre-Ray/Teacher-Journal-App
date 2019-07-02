import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/redux/reducers';
import { Observable, Subscription } from 'rxjs';
import { IState } from 'src/app/redux/state';
import { Student } from 'src/app/common/entities/student';
import { ExportService } from 'src/app/common/services/export.service';
import { Subject } from 'src/app/common/entities/subject';

@Component({
  selector: 'app-export-page',
  templateUrl: './export-page.component.html',
  styleUrls: ['./export-page.component.scss']
})
export class ExportPageComponent implements OnDestroy, OnInit {
  private subscription: Subscription;
  public data$: Observable<IState> = this.store.select(state => state.data);
  public students: Student[] = [];
  public subjects: Subject[] = [];

  constructor(private store: Store<State>, private exportService: ExportService) {}

  public ngOnInit(): void {
    this.subscription = this.data$.subscribe((data) => {
      this.students = data.students;
      this.subjects = data.subjects;
    });
  }

  public excelExport(): void {
    this.exportService.exportDataToExcel(this.students, this.subjects);
  }

  public pdfExport(): void {
    this.exportService.exportDataToPdf(this.students);
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
