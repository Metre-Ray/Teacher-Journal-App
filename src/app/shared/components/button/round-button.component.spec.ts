import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundButtonComponent } from './round-button.component';
import { Component } from '@angular/core';

@Component({
  template: '<app-round-button>+</app-round-button>'
})
class HostComponent { }

describe('RoundButtonComponent', () => {
  let component: RoundButtonComponent;
  let fixture: ComponentFixture<RoundButtonComponent>;
  let fixture2: ComponentFixture<HostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoundButtonComponent, HostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundButtonComponent);
    fixture2 = TestBed.createComponent(HostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('host component should contain button with +', () => {
    const but: HTMLElement = fixture2.nativeElement.querySelector('button');
    expect(but).toBeTruthy();
    expect(but.textContent).toContain('+');
  });

});
