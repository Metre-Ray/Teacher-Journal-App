import { Directive, ElementRef, Input, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appToggleClass]'
})
export class ToggleClassDirective {

  toggleFlag = false;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @Input('appToggleClass') className: string;
  defaultName = 'clicked';

  @HostListener('click') onClick() {
    this.toggle(this.className || this.defaultName);
  }

  private toggle(className: string) {
    if (!this.toggleFlag) {
      this.renderer.addClass(this.el.nativeElement, className);
      this.toggleFlag = true;
    } else {
      this.renderer.removeClass(this.el.nativeElement, className);
      this.toggleFlag = false;
    }
  }
}
