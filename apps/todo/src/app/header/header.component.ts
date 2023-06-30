import { Component, OnInit } from '@angular/core';
import {Navigation, NavObj} from "../navigation";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  //build navigation based on list of objects.
  //to do: to make it 100% dependable from 1 object, create routes based on this
  navigation: NavObj[] = Navigation.getNavigation()

  constructor() { }

  ngOnInit(): void {
  }

  isExpandable(item: NavObj){
    return ("expanded" in item)
  }

  showHide(title: string) {
    //this.is_expanded = !this.is_expanded;

    this.navigation = this.navigation.map((obj) => {
      //printer 4 ganger, 1 gang for hver item in array
      //console.log("QQ.key in object:", ("expanded" in obj))
      //console.log("QQ.submenu length:", obj.submenu?.length)
      if(obj.title == title) {
        return {...obj, expanded: !obj.expanded}
      } else {
        return obj
      }
    })
/*    grab obj with title title and swap expanded if exist
    this.navigation[title]*/
  }

}
