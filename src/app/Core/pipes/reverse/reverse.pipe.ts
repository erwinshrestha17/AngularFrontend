import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
  standalone: true
})
export class ReversePipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    let reverse=''
    for (let str=value.length-1;str>=0;str--){
      reverse+=value[str]
    }
    return reverse;
  }

}
