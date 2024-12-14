import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'join'
})
export class JoinPipe implements PipeTransform {

  transform(value: string[] | string | undefined, separator: string = ', '): string {
    if (!value) {
      return '';
    }
    const isArray = Array.isArray(value);
    return isArray ? value.join(separator) : value;
  }

}
