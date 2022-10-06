import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html'
})
export class FormsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //example 1
  form1 = new FormGroup({
    email: new FormControl('', {validators: [Validators.required]}),
    password: new FormControl('', {validators: [Validators.required]})
  })
//example 2
  email = new FormControl('', {validators: [Validators.required]})
  password = new FormControl('', {validators: [Validators.required]})

  form2 = new FormGroup({
    email: this.email,
    password: this.password
  })

  //email3 = new FormControl('')

  //example 3

  form3 = new FormGroup({
    title: new FormControl('This is the title'),
    address_group: new FormGroup({
      street: new FormControl('the street'),
      city: new FormControl('the city'),
      code_group: new FormGroup({
        zip: new FormControl('3515'),
        num: new FormControl('99'),
      })
    })
  })

  logForm3() {
    console.log(this.form3.value)
  }

  //example 4

  new_car = new FormGroup({
    model: new FormControl('d'),
    year: new FormControl('1'),
  })

  cars = new FormArray([
    this.new_car
  ])

  form4 = new FormGroup({
    title: new FormControl('This is the title'),
    cars: this.cars
  })

  addCar() {
    this.cars.push(
      new FormGroup({
        model: new FormControl(''),
        year: new FormControl(''),
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
