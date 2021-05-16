import { Pipe, PipeTransform } from '@angular/core';
import {Tree} from './interfaces';

@Pipe({
  name: 'sorting'
})
export class SortingPipe implements PipeTransform {

  transform(trees: Tree[], type = ''): any {
    return  trees.filter(tree => {
      return tree.type == type;
    })
  }

}
