import {Directive, HostBinding, HostListener} from '@angular/core';

//This will toggle one class on and off

@Directive({
  selector: '[appTest]'
})
export class TestDirective {
  @HostBinding('class.box1') toggle: boolean = false

  constructor() { }
  @HostListener('mouseover') onMouseOver() {
    this.toggleAction()
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.toggleAction()
  }

  toggleAction() {
    this.toggle = !this.toggle
  }

}
