import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputTodoComponent } from './components/input-todo/input-todo.component';
import {FormsModule} from "@angular/forms";
import {TodosService} from "./services/todos.service";
import { NG_ENTITY_SERVICE_CONFIG } from '@datorama/akita-ng-entity-service';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { environment } from '../environments/environment';
import { ShowNumberComponent} from "./components/show-number/show-number.component";
import { LightUpDirective } from './light-up.directive';
import { TestDirective } from './test.directive';
import { Test2Directive } from './test2.directive';
import { AppPropDirective } from './app-prop.directive';
import { NotifyComponent } from './notify/notify.component';
import { ReactiveFormsModule} from "@angular/forms";
import { SelectComponent } from './select/select.component';
import { PaginatorComponent } from './paginator/paginator.component';
import {PaginatorPipe} from "./paginator/paginator.pipe";
import { SelectStringComponent } from './select-string/select-string.component';
import { DisplayTemplateComponent } from './display-template/display-template.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {MatSliderModule} from "@angular/material/slider";

@NgModule({
  declarations: [
    AppComponent,
    InputTodoComponent,
    ShowNumberComponent,
    LightUpDirective,
    TestDirective,
    Test2Directive,
    AppPropDirective,
    NotifyComponent,
    SelectComponent,
    PaginatorComponent,
    PaginatorPipe,
    SelectStringComponent,
    DisplayTemplateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    AkitaNgRouterStoreModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatButtonModule,
    MatSliderModule
  ],
  providers: [TodosService, { provide: NG_ENTITY_SERVICE_CONFIG, useValue: { baseUrl: 'https://jsonplaceholder.typicode.com' }}],
  bootstrap: [AppComponent]
})
export class AppModule { }
