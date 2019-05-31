import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

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
import { NewDateFormComponent } from './components/subjects/new-date-form/new-date-form.component';
import { LanguageSelectorComponent } from './components/language-selector/language-selector.component';

import { SharedModule } from './shared/shared.module';
import { ReduxModule } from './redux/redux.module';
import { ChartComponent } from './components/chart/chart.component';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

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
    NewDateFormComponent,
    LanguageSelectorComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    ReduxModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
