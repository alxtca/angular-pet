import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

//to select by class name - selector: ".container"
@Directive({
  selector: '[appLightUp]'
})
export class LightUpDirective {
  color: number[] = [100,100,100]

  constructor(private elRef: ElementRef,
              private renderer: Renderer2) { }

  @HostListener('click', ['$event.target']) logDirective() {
    //console.log("directive lightUp executed a method logDirective() - idk", idk)
    //alert("This event was listened by light-up directive")
    //this.renderer.setStyle()
    this.elRef.nativeElement.style.backgroundColor = `rgb(${this.color[0]},${this.color[1]}, ${this.color[2]}`
    console.log(this.elRef.nativeElement)

    //update colors
    this.color[0] = this.getRandomArbitrary(100, 250)
    this.color[1] = this.getRandomArbitrary(100, 250)
    this.color[2] = this.getRandomArbitrary(100, 250)
  }
  @HostListener('mouseenter') onMouseOver() {
    this.elRef.nativeElement.style.backgroundColor = 'yellow'
    this.elRef.nativeElement.style.color = 'black'
    //this.elRef.nativeElement.innerText = 'NEW TEXT'
    console.log(this.elRef.nativeElement.classList)
    console.log(this.elRef.nativeElement.className)
    this.elRef.nativeElement.classList.add('container')
    //this.elRef.nativeElement.className.append('container')
    console.log(this.elRef.nativeElement.className)


    //console.log(this.elRef.nativeElement.innerText)
    //console.log(this.elRef.nativeElement.innerHTML)
    //console.log('inner height' , this.elRef.nativeElement.innerHeight)
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.elRef.nativeElement.style.backgroundColor = ''
    this.elRef.nativeElement.style.color = ''
  }

  getRandomArbitrary(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }


}
