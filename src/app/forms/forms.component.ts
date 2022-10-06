import { Component, OnInit } from '@angular/core';
import {UntypedFormArray, UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html'
})
export class FormsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //example 1
  form1 = new UntypedFormGroup({
    email: new UntypedFormControl('', {validators: [Validators.required]}),
    password: new UntypedFormControl('', {validators: [Validators.required]})
  })
//example 2
  email = new UntypedFormControl('', {validators: [Validators.required]})
  password = new UntypedFormControl('', {validators: [Validators.required]})

  form2 = new UntypedFormGroup({
    email: this.email,
    password: this.password
  })

  //email3 = new FormControl('')

  //example 3

  form3 = new UntypedFormGroup({
    title: new UntypedFormControl('This is the title'),
    address_group: new UntypedFormGroup({
      street: new UntypedFormControl('the street'),
      city: new UntypedFormControl('the city'),
      code_group: new UntypedFormGroup({
        zip: new UntypedFormControl('3515'),
        num: new UntypedFormControl('99'),
      })
    })
  })

  logForm3() {
    console.log(this.form3.value)
  }

  //example 4

  new_car = new UntypedFormGroup({
    model: new UntypedFormControl('d'),
    year: new UntypedFormControl('1'),
  })

  cars = new UntypedFormArray([
    this.new_car
  ])

  form4 = new UntypedFormGroup({
    title: new UntypedFormControl('This is the title'),
    cars: this.cars
  })

  addCar() {
    this.cars.push(
      new UntypedFormGroup({
        model: new UntypedFormControl(''),
        year: new UntypedFormControl(''),
      })
    )
  }

  logCar(c: any) {
    console.log(c)
  }

  submitHandler() {
    //console.log("email:", this.email.value, " password: ", this.password.value)
  }
}
