import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { DataEffects } from './effects/data.effects';
import { reducers } from './reducers';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([DataEffects]),
    HttpClientModule
  ]
})
export class ReduxModule { }
