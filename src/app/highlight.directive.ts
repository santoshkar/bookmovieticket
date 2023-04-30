import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { SeatColumn } from './model/seat-column';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) { }

  @Input('appHighlight') highlightColor: any;

  @HostListener('click') onMouseClick() {
    this.highlight(this.highlightColor || 'green');
  }

  private highlight(obj: SeatColumn) {
    if(!obj.currentlySelected) obj.currentlySelected
      obj.currentlySelected = !obj.currentlySelected;
    if(obj.seatAvailability === "AVAILABLE"){
      if(!obj.currentlySelected)
        this.el.nativeElement.style.backgroundColor = 'white';
      else
        this.el.nativeElement.style.backgroundColor = 'green';
    }else{
      this.el.nativeElement.style.backgroundColor = 'lightgray';
    }
  }
}
