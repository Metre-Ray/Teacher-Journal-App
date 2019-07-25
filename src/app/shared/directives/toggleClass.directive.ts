import { Directive, ElementRef, Input, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appToggleClass]'
})
export class ToggleClassDirective {

  @Input('appToggleClass') public className: string;
  public defaultName: string = 'clicked';
  public toggleFlag: boolean = false;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  private toggle(className: string): void {
    if (!this.toggleFlag) {
      this.renderer.addClass(this.el.nativeElement, className);
      this.toggleFlag = true;
    } else {
      this.renderer.removeClass(this.el.nativeElement, className);
      this.toggleFlag = false;
    }
  }

  @HostListener('click') public onClick(): void {
    this.toggle(this.className || this.defaultName);
  }
}
