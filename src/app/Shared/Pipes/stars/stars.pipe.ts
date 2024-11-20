import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stars',
  standalone: true
})
export class StarsPipe implements PipeTransform {

  transform(value: string): string {
    return `${value}⭐`;
  }

}
