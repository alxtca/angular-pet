import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name:'PaginatorPipe'
})
export class PaginatorPipe implements PipeTransform {
  public transform(list: any[], offset: number, limit: number): any {
    //here offset is item# in item[], not page#
    return list.slice(offset, offset+limit)
  }
}
