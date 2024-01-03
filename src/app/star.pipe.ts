import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'star',
  standalone: true,
})
export class StarPipe implements PipeTransform {
  transform(value: number): string {
    let result = '';
    for (let i = 0; i < value; i++) {
      result += '⭐️';
    }
    return result;
  }
}
