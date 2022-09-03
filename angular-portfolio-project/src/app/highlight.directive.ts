import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(public el: ElementRef) { 
  }

  ngOnInit() {
    let element = this.el.nativeElement;
    element.style.background = 'blue';
    element.style.padding = '20px';
    element.style.marginTop = '15px';
    element.style.color = 'white';
  }
}
