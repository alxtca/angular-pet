import {Component, HostListener, OnInit, TemplateRef} from '@angular/core';
import {TodosService} from "./services/todos.service";
import {AtodoQuery} from "./state/atodo.query";
import {AtodoService} from "./state/atodo.service";
import {Observable, of} from "rxjs";
import {NotifyService} from "./notify.service";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'To do App';
  todos: string[] = ['loading'] //replace with observable in template
  atodos$: Observable<string[]> = of(['loading'])
  newTodoValue: string = ""
  editingItemIndex: number | undefined
  parnum: number = 10;
  //move these to an Akita state
  isEditing: boolean = false;
  todo: string = '';
  counter: number =0;
  boxData: string = '';
  message: string = ''
  //for pagination example
  pageItems: string[] = ['asdf1', 'qwee2', 'asdf3', 'zxcv4', 'zxwdf5', 'xcbrg6','asdf7', 'qwee8', 'asdf9', 'zxcv10', 'zxwdf11', 'xcbrg12' ]
  //pageOffset: number = 0; //current page? Is this needed? maybe yes
  itemsPerPage: number = 5;
  itemsOffset: number = 0;//=currPage*itemPerPage

  customers: string[] = ['alex', 'joe', 'rachel']
  customers_obj: any[] = [
    {name: 'alex', job: 'war-chief'},
    {name: 'joe', job: 'thug'},
    {name: 'rachel', job: 'secretary'}
  ]

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


  myFunction: string = 'showAgentInfo()';
  showAgentInfo(){
    console.log('ShowAgentInfo Works')
  }

  handleAction(e: string) {
    this.message = e
  }

  @HostListener('click', ['$event']) handleKeyDown(event: KeyboardEvent) {
    this.counter++
  }

  constructor(private todosService: TodosService,
              private query: AtodoQuery,
              private atodoService: AtodoService,
              private service: NotifyService
  ) {  }

  ngOnInit(): void {
    this.todos = this.todosService.getTodos()
    this.atodos$ = this.query.getAllTodos()


    //this works only once, on page Initialization
    console.log("this ol counter var", this.itemsOffset)
    console.log("pageItems.lenght", this.pageItems.length)

    //this.email.setValue(123) //not possible in angular 14

  }

  //with akita
  agetTodos() {
    const result = this.query.getAllTodos()
    console.log(result)
  }
  aaddTodo() {
    this.atodoService.addTodo(this.todo)
    this.todo = ''
  }
  update(){
    this.isEditing = false
    this.atodoService.updateTodo(this.todo, this.newTodoValue )
  }
  adeleteTodo(td: string){
    this.atodoService.removeTodo(td)
  }
  edit(td: string) {
    this.isEditing = true
    this.todo = td
    this.newTodoValue = td
  }

  //---------

  deleteTodo(td: string) {
    this.todosService.removeTodo(td)
  }

  editTodo(todo: string) {
    this.todosService.setEditing(todo)
  }

  get todos2(): string[] {
    return this.todosService.todos2
  }

  handleIncrease() {
    this.parnum++
  }

  resetCounter() {
    this.counter = 0
  }

  callLightUp() {

  }

  sendNotification() {
    this.service.notify('WARNING', 'The warning message')
  }

  setItemOffset(itemOffset: number) {
    this.itemsOffset = itemOffset
  }

  changeItemsPerPage(n: number) {
    this.itemsPerPage = n;
    this.itemsOffset = 0 //reset to avoid showing wrong list / empty lists etc.
  }

  logTemplate(tempVar: TemplateRef<any>) {
    console.log("Template var: ")
    console.log(tempVar)
  }

  logEvent($event: MouseEvent) {
    console.log($event)
  }

  selectedSelect: number = 5;
  outEvent(num: number) {
    console.log(num)
    this.selectedSelect = num
  }
  isCalling: boolean = false;
  callPhone(value: string) {
    this.isCalling = true;
    console.log(value)
  }

  logCtx(ctx: any) {
    console.log(ctx)
  }

  submitHandler() {
    //console.log("email:", this.email.value, " password: ", this.password.value)
  }
}
