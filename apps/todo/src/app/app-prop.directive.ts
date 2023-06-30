import {Directive, EventEmitter, HostBinding, HostListener, Output} from '@angular/core';

//this directive behaves like a child :D
//

@Directive({
  selector: '[appProp]'
})
export class AppPropDirective {

  @Output('action') action = new EventEmitter<string>()
  @HostBinding('attr.maxlength') max: number = 10; //this makes impossible to type more than 10 characters
  @HostBinding('attr.minlength') min: number =3;

  constructor() { }

  //does second argument go into function argument?
  @HostListener('keyup', ['$event.target.value'])  onTyping(data: any) {
    console.log(data);
    if (data.length < this.min) {
      this.action.emit(`Enter atleast ${this.min} character`);
    } else if (data.length >= this.min && data.length < this.max) {
      this.action.emit('');
    } else {
      this.action.emit(`Reached max char limit of ${this.max} characters`);
    }
  }

}
