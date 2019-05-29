import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Array<string | object>, searchCriteria: string, field?: string): any {
    if (!value.length || !searchCriteria) { return value; }
    return field
    ? value.filter((item) => {
      item[field].toLowerCase().includes(searchCriteria);
    })
    : value.filter((item) => String(item).toLowerCase().includes(searchCriteria));
  }
}
