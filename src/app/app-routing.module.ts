import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentPageComponent } from './components/students/student-page/student-page.component';
import { StudentFormComponent } from './components/students/student-form/student-form.component';
import { SubjectFormComponent } from './components/subjects/subject-form/subject-form.component';
import { SubjectMarksPageComponent } from './components/subjects/subject-marks-page/subject-marks-page.component';
import { SubjectsListPageComponent } from './components/subjects/subjects-list-page/subjects-list-page.component';
import { StatisticsPageComponent } from './components/statistics-page/statistics-page.component';
import { ExportPageComponent } from './components/export-page/export-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'students' },
  { path: 'students', component: StudentPageComponent },
  { path: 'students/form', component: StudentFormComponent },
  { path: 'subjects', children: [
    { path: '', pathMatch: 'full', component: SubjectsListPageComponent},
    { path: 'form', component: SubjectFormComponent },
    { path: ':name', component: SubjectMarksPageComponent}
  ] },
  { path: 'statistics', component: StatisticsPageComponent },
  { path: 'export', component: ExportPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
