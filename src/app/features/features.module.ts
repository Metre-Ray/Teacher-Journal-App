import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsModule } from './students/students.module';
import { SubjectsModule } from './subjects/subjects.module';
import { ExportPageComponent } from './export-page/export-page.component';
import { StatisticsPageComponent } from './statistics-page/statistics-page.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ExportPageComponent,
    StatisticsPageComponent
  ],
  imports: [
    CommonModule,
    StudentsModule,
    SubjectsModule,
    SharedModule
  ],
  exports: [
    StudentsModule,
    SubjectsModule,
    StatisticsPageComponent,
    ExportPageComponent
  ]
})
export class FeaturesModule { }
