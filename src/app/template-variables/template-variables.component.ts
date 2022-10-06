import {Component, OnInit, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-template-variables',
  templateUrl: './template-variables.component.html'
})
export class TemplateVariablesComponent implements OnInit {
  isCalling: boolean = false;
  customers: string[] = ['alex', 'joe', 'rachel']
  customers_obj: any[] = [
    {name: 'alex', job: 'war-chief'},
    {name: 'joe', job: 'thug'},
    {name: 'rachel', job: 'secretary'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  callPhone(value: string) {
    this.isCalling = true;
    console.log(value)
  }

  logTemplate(tempVar: TemplateRef<any>) {
    console.log("Template var: ")
    console.log(tempVar)
  }
}
