import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Array<string | object>, field?: string): Array<string | object> {
    if (!value.length) { return value; }
    const result = [...value];
    if (!field) { return result.sort(); }
    result.sort((el1, el2) => el1[field] <= el2[field] ? -1 : 1);
    return result;
  }

}
