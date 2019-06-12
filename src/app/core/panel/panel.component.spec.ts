import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';

import { PanelComponent } from './panel.component';
import { Pipe, PipeTransform } from '@angular/core';

// tslint:disable: no-any
@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {
  transform(value: any): any {
    return value;
  }
}

describe('PanelComponent', () => {
  let component: PanelComponent;
  let fixture: ComponentFixture<PanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PanelComponent,
        TranslatePipe
      ],
      imports: [ RouterModule.forRoot([]) ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
