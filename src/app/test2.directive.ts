import {Directive, HostBinding, HostListener} from '@angular/core';

//this will toggle between 2 classes on clicking
//on mouse over add background color to be yellow

@Directive({
  selector: '[appTest2]'
})
export class Test2Directive {
  //to add/remove class .span1 .span2 from styles.css
  //alternative is to use on tag [class.span1] = "boolean"
  @HostBinding('class.span1') span1: boolean = true
  @HostBinding('class.span2') span2: boolean = false
  @HostBinding('style.backgroundColor') bgColor: string = 'yellow'

  constructor() { }
  @HostListener('click') onClick(){
    this.span1 = !this.span1
    this.span2 = !this.span2
  }

  @HostListener('mouseover') onMouseOver() {
    this.bgColor = 'green'
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.bgColor = 'brown'
  }

}
