import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRandomBackground]',
})
export class RandomBackgroundDirective {
  constructor(private target: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(
      this.target.nativeElement,
      'backgroundColor',
      `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)})`
    );
  }
}
