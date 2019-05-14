import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './root/app.component';
import { StudentTableComponent } from './components/student-table/student-table.component';
import { StudentPageComponent } from './components/student-page/student-page.component';
import { PanelComponent } from './components/panel/panel.component';
import { HeadComponent } from './components/head/head.component';
import { RoundButtonComponent } from './shared/components/round-button/round-button.component';
import { FormComponent } from './shared/components/form/form.component';
import { StudentFormComponent } from './components/student-form/student-form.component';
import { SubjectsListPageComponent } from './components/subjects-list-page/subjects-list-page.component';
import { SubjectMarksPageComponent } from './components/subject-marks-page/subject-marks-page.component';
import { ExportPageComponent } from './components/export-page/export-page.component';
import { StatisticsPageComponent } from './components/statistics-page/statistics-page.component';
import { SubjectFormComponent } from './components/subject-form/subject-form.component';
import { SubjectTableComponent } from './components/subject-table/subject-table.component';

import { StoreModule } from '@ngrx/store';
import { reducers } from './redux/reducers';
import { EffectsModule } from '@ngrx/effects';
import { DataEffects } from './redux/effects/data.effects';

@NgModule({
  declarations: [
    AppComponent,
    StudentTableComponent,
    StudentPageComponent,
    PanelComponent,
    HeadComponent,
    RoundButtonComponent,
    FormComponent,
    StudentFormComponent,
    SubjectsListPageComponent,
    SubjectMarksPageComponent,
    ExportPageComponent,
    StatisticsPageComponent,
    SubjectFormComponent,
    SubjectTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([DataEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
