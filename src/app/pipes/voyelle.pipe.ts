import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'voyelle',
})
export class VoyellePipe implements PipeTransform {
  transform(value: any) {
    let newCh = '';
    for (let i = 0; i < value.length; i++) {
      if (
        value[i] == 'a' ||
        value[i] == 'e' ||
        value[i] == 'u' ||
        value[i] == 'i' ||
        value[i] == 'o'
      ) {
        newCh = newCh + '*';
      } else {
        newCh = newCh + value[i];
      }
    }
  }
}
