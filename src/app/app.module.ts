import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './root/app.component';
import { StudentTableComponent } from './components/students/student-table/student-table.component';
import { StudentPageComponent } from './components/students/student-page/student-page.component';
import { PanelComponent } from './components/panel/panel.component';
import { HeadComponent } from './components/head/head.component';
import { StudentFormComponent } from './components/students/student-form/student-form.component';
import { SubjectsListPageComponent } from './components/subjects/subjects-list-page/subjects-list-page.component';
import { SubjectMarksPageComponent } from './components/subjects/subject-marks-page/subject-marks-page.component';
import { ExportPageComponent } from './components/export-page/export-page.component';
import { StatisticsPageComponent } from './components/statistics-page/statistics-page.component';
import { SubjectFormComponent } from './components/subjects/subject-form/subject-form.component';
import { SubjectTableComponent } from './components/subjects/subject-table/subject-table.component';

import { SharedModule } from './shared/shared.module';
import { ReduxModule } from './redux/redux.module';
import { SortPipe } from './shared/pipes/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StudentTableComponent,
    StudentPageComponent,
    PanelComponent,
    HeadComponent,
    StudentFormComponent,
    SubjectsListPageComponent,
    SubjectMarksPageComponent,
    ExportPageComponent,
    StatisticsPageComponent,
    SubjectFormComponent,
    SubjectTableComponent,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    ReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
