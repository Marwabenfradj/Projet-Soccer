import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
})
export class ReversePipe implements PipeTransform {
  transform(value: any) {
    let newCh = '';
    for (let i = 0; i < value.length; i++) {
      newCh = value[i] + newCh;
    }
    return newCh;
  }
}
