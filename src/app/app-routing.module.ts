import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BugTrackerComponent} from "./bug-tracker/bug-tracker.component";
import {AkitaSimpleComponent} from "./akita-simple/akita-simple.component";
import {SimpleTodoComponent} from "./components/simple-todo.component";
import {ParentChildComponent} from "./parent-child/parent-child.component";
import {HListenersComponent} from "./h-listeners/h-listeners.component";
import {FormsComponent} from "./forms/forms.component";
import {FullFeatureTodoComponent} from "./full-feature-todo/full-feature-todo.component";
import {TemplateVariablesComponent} from "./template-variables/template-variables.component";
import {PaginationExampleComponent} from "./pagination-example/pagination-example.component";
import {NotificationComponent} from "./notification/notification.component";
import {StyleComponent} from "./style/style.component";
import {EventsComponent} from "./events/events.component";
import {ViewChildComponent} from "./view-child/view-child.component";
import {InstancesComponent} from "./instances/instances.component";
import {AccessibilityComponent} from "./accessibility/accessibility.component";

const routes: Routes = [
  {path: 'bug_tracker', component: BugTrackerComponent},
  {path: 'akita_simple', component: AkitaSimpleComponent},
  {path: 'simple-todo', component: SimpleTodoComponent},
  {path: 'parent-child', component: ParentChildComponent},
  {path: 'host-listeners', component: HListenersComponent},
  {path: 'forms', component: FormsComponent},
  {path: 'full-feature-todo', component: FullFeatureTodoComponent},
  {path: 'template-variable', component: TemplateVariablesComponent},
  {path: 'pagination-example', component: PaginationExampleComponent},
  {path: 'notification', component: NotificationComponent},
  {path: 'style', component: StyleComponent},
  {path: 'events', component: EventsComponent},
  {path: 'view-child', component: ViewChildComponent},
  {path: 'instances', component: InstancesComponent},
  {path: 'accessibility', component: AccessibilityComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
