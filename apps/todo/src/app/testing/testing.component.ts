import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {


  //It will be a form
  //form state is stored in akita store
  //on form submitt
  //-set loading
  //-set timeout
  //-set state in the end of timeout


  productData!: FormGroup;


  constructor() { }

  ngOnInit(): void {
    this.createForm()
  }

  productFeatures = new FormGroup({

  })

  createForm() {
    this.productData = new FormGroup<any>({
      productName : new FormControl(''),
      productId: new FormControl(),
      features: new FormArray([

      ])
    })
  }
}
