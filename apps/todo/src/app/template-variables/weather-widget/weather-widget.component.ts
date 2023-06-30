import {
  Component,
  inject,
  Injector,
  Input,
  TemplateRef
} from '@angular/core';
import { WidgetActionsService as WidgetActions } from '../widget-actions.service';
import { WidgetStateService as WidgetState } from '../widget-state.service';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.css']
})
export class WeatherWidgetComponent {
// export class WeatherWidgetComponent implements AfterViewInit{
  //Declarative approach
  //advantage: template can be provided by user as Input
  @Input()
  headerTemplate!: TemplateRef<any>;

  @Input()
  contentTemplate!: TemplateRef<WidgetState>;
  // contentTemplate!: TemplateRef<{ $implicit: WidgetState }>;

  @Input()
  actionTemplate!: TemplateRef<any>;

  state = inject(WidgetState);
  actions = inject(WidgetActions);

  //This is Injector of WeatherWidgetComponent,
  //and is needed for CustomActionComponent to access methods from actions.
  injector = inject(Injector); //I guess it points to itself

  //Imperative approach
  //basically says take this template and put it inside this container after view init.
  // @ViewChild('container', {read:ViewContainerRef}) container!: ViewContainerRef;
  // @ViewChild('defaultWidgetHeader') headerTemplateDeclarative!: TemplateRef<any>;
  //
  // ngAfterViewInit() {
  //   this.container.createEmbeddedView(this.headerTemplateDeclarative)
  // }

}
