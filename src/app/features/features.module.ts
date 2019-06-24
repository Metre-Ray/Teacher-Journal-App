import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsModule } from './students/students.module';
import { SubjectsModule } from './subjects/subjects.module';
import { ExportPageComponent } from './export-page/export-page.component';
import { StatisticsPageComponent } from './statistics/statistics-page/statistics-page.component';
import { SharedModule } from '../shared/shared.module';
import { BarChartComponent } from './statistics/bar-chart/bar-chart.component';

@NgModule({
  declarations: [
    ExportPageComponent,
    StatisticsPageComponent,
    BarChartComponent
  ],
  imports: [
    CommonModule,
    StudentsModule,
    SubjectsModule,
    SharedModule
  ],
  exports: []
})
export class FeaturesModule { }
