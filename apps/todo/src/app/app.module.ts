import { NgModule, DoBootstrap, ApplicationRef } from '@angular/core';
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
import { ShowNumberComponent} from "./parent-child/show-number/show-number.component";
import { LightUpDirective } from './light-up.directive';
import { TestDirective } from './test.directive';
import { Test2Directive } from './test2.directive';
import { AppPropDirective } from './app-prop.directive';
import { NotifyComponent } from './notify/notify.component';
import { ReactiveFormsModule} from "@angular/forms";
import { SelectComponent } from './pagination-example/select/select.component';
import { PaginatorComponent } from './pagination-example/paginator/paginator.component';
import {PaginatorPipe} from "./pagination-example/paginator/paginator.pipe";
import { SelectStringComponent } from './template-variables/select-string/select-string.component';
import { DisplayTemplateComponent } from './display-template/display-template.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {MatSliderModule} from "@angular/material/slider";
import { BugTrackerComponent } from './bug-tracker/bug-tracker.component';
import { GenericsComponent } from './generics/generics.component';
import { BasalComponent } from './basal/basal.component';
import { HeaderComponent } from './header/header.component';
import { AkitaSimpleComponent } from './akita-simple/akita-simple.component';
import { SimpleTodoComponent } from './components/simple-todo.component';
import { ParentChildComponent } from './parent-child/parent-child.component';
import { HListenersComponent } from './h-listeners/h-listeners.component';
import { FormsComponent } from './forms/forms.component';
import { FullFeatureTodoComponent } from './full-feature-todo/full-feature-todo.component';
import { TemplateVariablesComponent } from './template-variables/template-variables.component';
import { PaginationExampleComponent } from './pagination-example/pagination-example.component';
import { NotificationComponent } from './notification/notification.component';
import { StyleComponent } from './style/style.component';
import { EventsComponent } from './events/events.component';
import { FilterComponent } from './full-feature-todo/filter/filter.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { ChildExampleComponent } from './view-child/child-example/child-example.component';
import { ChildExample2Component } from './view-child/child-example2/child-example2.component';
import { InstancesComponent } from './instances/instances.component';
import { InstanceChildComponent } from './instances/instance-child/instance-child.component';
import { AccessibilityComponent } from './accessibility/accessibility.component';
import { TablesComponent } from './tables/tables.component';
import { TypesComponent } from './types/types.component';
import { FargeViserenComponent } from './farge-viseren/farge-viseren.component';
import { DateDemoComponent } from './date-demo/date-demo.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatInputModule} from "@angular/material/input";
import { RenderingComponent } from './rendering/rendering.component';
import { KidComponent } from './rendering/kid/kid.component';
import { FunctionsComponent } from './functions/functions.component';
import { TestingComponent } from './testing/testing.component';
import { AkitaStateTestComponent } from './akita-state-test/akita-state-test.component';
import { WeatherWidgetComponent } from './template-variables/weather-widget/weather-widget.component';
import { CustomActionComponent } from './template-variables/custom-action/custom-action.component';
import { WidgetPracticeComponent } from './template-variables/widget-practice/widget-practice.component';
import { RxjsPracticeComponent } from './rxjs-practice/rxjs-practice.component';
import {FeltWrapComponent} from "./forms/felt-wrap/felt-wrap.component";
import { TranslateComponent } from './translate/translate.component';
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { ChildComponent } from './translate/child/child.component';

//extend window interface and tell about newly added property
declare global {
  interface Window { appRef: ApplicationRef, Cypress: any}
}

// AoT requires an exported function for factories
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

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
    BugTrackerComponent,
    GenericsComponent,
    BasalComponent,
    HeaderComponent,
    AkitaSimpleComponent,
    SimpleTodoComponent,
    ParentChildComponent,
    HListenersComponent,
    FormsComponent,
    FullFeatureTodoComponent,
    TemplateVariablesComponent,
    PaginationExampleComponent,
    NotificationComponent,
    StyleComponent,
    EventsComponent,
    FilterComponent,
    ViewChildComponent,
    ChildExampleComponent,
    ChildExample2Component,
    InstancesComponent,
    InstanceChildComponent,
    AccessibilityComponent,
    TablesComponent,
    TypesComponent,
    FargeViserenComponent,
    DateDemoComponent,
    RenderingComponent,
    KidComponent,
    FunctionsComponent,
    TestingComponent,
    AkitaStateTestComponent,
    WeatherWidgetComponent,
    CustomActionComponent,
    WidgetPracticeComponent,
    RxjsPracticeComponent,
    FeltWrapComponent,
    TranslateComponent,
    ChildComponent,
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
    MatSliderModule,
    MatDatepickerModule,
    MatInputModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  providers: [TodosService, { provide: NG_ENTITY_SERVICE_CONFIG, useValue: { baseUrl: 'https://jsonplaceholder.typicode.com' }}]
  //bootstrap: [AppComponent]
})
// export class AppModule { }
export class AppModule implements DoBootstrap{
  ngDoBootstrap(appRef: ApplicationRef): void {
    appRef.bootstrap(AppComponent);

    if(window.Cypress) {
      window.appRef = appRef;
    }
  }
}
