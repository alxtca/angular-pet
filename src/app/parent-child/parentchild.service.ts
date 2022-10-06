import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ParenChildService {
  send = new BehaviorSubject<boolean>(false)

  public submitFormParent() {
    this.send.next(true)
    //but what if this need to send variable value that is contained by child?
    //then child sends it when send emits.
    //that is next step. later.
  }

  //this could be in any other service too
  public submitFormChild(obj: any) {
    console.log("object was sendt to backend: ", obj)
  }
}
