import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[tap]',
})
export class TapCursor {
  constructor(el: ElementRef) {
    el.nativeElement.style.cursor = 'pointer';
  }
}