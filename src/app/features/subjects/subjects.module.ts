import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectFormComponent } from './subject-form/subject-form.component';
import { SubjectsListPageComponent } from './subjects-list-page/subjects-list-page.component';
import { SubjectMarksPageComponent } from './subject-marks-page/subject-marks-page.component';
import { SubjectTableComponent } from './subject-table/subject-table.component';
import { NewDateFormComponent } from './new-date-form/new-date-form.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SubjectsListPageComponent,
    SubjectMarksPageComponent,
    SubjectFormComponent,
    SubjectTableComponent,
    NewDateFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class SubjectsModule { }
