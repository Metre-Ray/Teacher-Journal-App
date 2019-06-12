import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadComponent } from './head/head.component';
import { PanelComponent } from './panel/panel.component';
import { LanguageSelectorComponent } from './language-selector/language-selector.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeadComponent,
    PanelComponent,
    LanguageSelectorComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    HeadComponent,
    PanelComponent
  ]
})
export class CoreModule { }
