import { Component, OnInit } from '@angular/core';
import {
  FormControl, FormGroup,
  UntypedFormArray,
  UntypedFormControl,
  UntypedFormGroup,
  Validators
} from "@angular/forms";
import { todoValidators } from './validators/range.validator';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html'
})
export class FormsComponent implements OnInit {
  start = new FormControl(null, Validators.required)
  finish = new FormControl(null, todoValidators.forbiddenNumberValidator(47))

  datoInterval = new FormGroup({
    start: this.start,
    finish: this.finish
  }, {
    validators: [todoValidators.erEtter(this.finish, this.start)]
  })

  constructor() { }

  ngOnInit(): void { }

  //example 1
  form1 = new FormGroup({
    email: new FormControl('', {validators: [Validators.required]}),
    password: new FormControl('', {validators: [Validators.required]}),
    passwordRepeat: new FormControl('', {validators: [Validators.required]}),
  },
    {
      //validator shall be of type ValidatorFn, and return type ValidationErrors
      validators: [
        todoValidators.passwordsAreEqual, //method: untyped
        todoValidators.areEqual, //function:ValidatorFn
        todoValidators.equalityValidator() //method returning a function:ValidatorFn
      ]
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
  //


}
