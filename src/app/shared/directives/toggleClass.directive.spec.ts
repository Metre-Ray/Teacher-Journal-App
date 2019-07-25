import { ToggleClassDirective } from './toggleClass.directive';
import { Component, DebugElement } from '@angular/core';
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
  let elements: HTMLElement[];

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [ TestComponent, ToggleClassDirective ]
    })
    .createComponent(TestComponent);
    fixture.detectChanges();

    elements = fixture.nativeElement.querySelectorAll('h2');
  });

  it('test component should have two elements with directive', () => {
    const elementsWithDir: DebugElement[] = fixture.debugElement.queryAll(By.directive(ToggleClassDirective));
    expect(elementsWithDir.length).toBe(2);
  });

  it('should add to the first h2 class "sky" and nothing to others', () => {
    elements[0].dispatchEvent(new Event('click'));
    expect(elements[0].classList).toContain('sky');
    expect(elements[1].classList).not.toContain('sky');
    expect(elements[1].classList).not.toContain('clicked');
    expect(elements[2].classList).not.toContain('sky');
  });

  it('should add to the second h2 class "clicked" and nothing to others', () => {
    elements[1].dispatchEvent(new Event('click'));
    expect(elements[1].classList).toContain('clicked');
    expect(elements[0].classList).not.toContain('sky');
    expect(elements[0].classList).not.toContain('clicked');
    expect(elements[2].classList).not.toContain('sky');
  });

  it('should add to the third h2 nothing and nothing to others', () => {
    elements[2].dispatchEvent(new Event('click'));
    expect(elements[2].classList).not.toContain('clicked');
    expect(elements[2].classList).not.toContain('sky');
    expect(elements[0].classList).not.toContain('clicked');
    expect(elements[0].classList).not.toContain('sky');
    expect(elements[1].classList).not.toContain('clicked');
    expect(elements[1].classList).not.toContain('sky');
  });

});
