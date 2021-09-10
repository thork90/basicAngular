import { ValueTransformer } from '@angular/compiler/src/util';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'azenpipom'
})
export class AzenpipomPipe implements PipeTransform {

  transform(value: any, times: number): unknown {
    return value.repeat(times);
  }

}
