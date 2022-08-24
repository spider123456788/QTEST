import { Pipe, PipeTransform } from '@angular/core';
import {Question} from "../../models/question.model";

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Question[], ...args: unknown[]): Question[] {
    console.log('Pipe', value)
    return value.slice().sort(
      (objA, objB) => objB.createdDate.getTime() - objA.createdDate.getTime(),
    );
  }

}
