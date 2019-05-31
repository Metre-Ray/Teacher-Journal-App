import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { FormComponent } from './components/form/form.component';
import { RoundButtonComponent } from './components/round-button/round-button.component';
import { ToggleClassDirective } from './directives/toggleClass.directive';
import { SortPipe } from './pipes/sort.pipe';
import { CustomDropdownComponent } from './components/custom-dropdown/custom-dropdown.component';


@NgModule({
  declarations: [
    FormComponent,
    RoundButtonComponent,
    ToggleClassDirective,
    SortPipe,
    CustomDropdownComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule
  ],
  exports: [
    FormComponent,
    RoundButtonComponent,
    ToggleClassDirective,
    SortPipe,
    CustomDropdownComponent
  ]
})
export class SharedModule { }
