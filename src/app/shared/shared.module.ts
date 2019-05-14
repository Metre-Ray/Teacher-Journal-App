import { NgModule } from '@angular/core';
import { FormComponent } from './components/form/form.component';
import { RoundButtonComponent } from './components/round-button/round-button.component';

@NgModule({
  declarations: [
    FormComponent,
    RoundButtonComponent
  ],
  imports: [],
  exports: [
    FormComponent,
    RoundButtonComponent
  ]
})
export class SharedModule { }
