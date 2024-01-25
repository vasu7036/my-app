import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'star'
})
export class StarPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return "value+☆";
  }

}
