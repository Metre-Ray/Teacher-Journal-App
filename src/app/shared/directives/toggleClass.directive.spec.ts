import { ToggleClassDirective } from './toggleClass.directive';
import { Component } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  template: `
  <h2 [appToggleClass]="'sky'"> Let's test this directive </h2>
  <h2 appToggleClass> Let's test this directive 2 </h2>
  <h2> No directive </h2>
  <p>Some unused text</p>
  `
})
class TestComponent { }

describe('ToggleClassDirective', () => {

  let fixture: ComponentFixture<TestComponent>;
  let elements;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [ TestComponent, ToggleClassDirective ]
    })
    .createComponent(TestComponent);
    fixture.detectChanges();

    elements = fixture.nativeElement.querySelectorAll('h2');
  });

  it('should have two elements with directive', () => {
    const elementsWithDir = fixture.debugElement.queryAll(By.directive(ToggleClassDirective));
    expect(elementsWithDir.length).toBe(2);
  });

  it('should add to the first h2 class "sky"', () => {
    elements[0].dispatchEvent(new Event('click'));
    expect(elements[0].classList).toContain('sky');
  });

  it('should add to the second h2 class "clicked"', () => {
    elements[1].dispatchEvent(new Event('click'));
    expect(elements[1].classList).toContain('clicked');
  });

  it('should add to the third h2 nothing', () => {
    elements[2].dispatchEvent(new Event('click'));
    expect(elements[2].classList).not.toContain('clicked');
    expect(elements[2].classList).not.toContain('sky');
  });

});
