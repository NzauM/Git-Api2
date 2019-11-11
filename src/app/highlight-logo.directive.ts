import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlightLogo]'
})
export class HighlightLogoDirective {

  constructor(private elem: ElementRef) { 
    this.elem.nativeElement.style.color = 'blue';
  }

}
