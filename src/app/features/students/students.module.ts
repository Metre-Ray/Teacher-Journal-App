import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentPageComponent } from './student-page/student-page.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentTableComponent } from './student-table/student-table.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    StudentTableComponent,
    StudentPageComponent,
    StudentFormComponent

  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
})
export class StudentsModule { }
