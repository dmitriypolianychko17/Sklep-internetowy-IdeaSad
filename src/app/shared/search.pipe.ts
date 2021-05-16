import { Pipe, PipeTransform } from '@angular/core';
import {Tree} from './interfaces';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(trees: Tree[], treeName = ''): any {
    if (!treeName.trim()) {
      return trees;
    }
    return  trees.filter(tree => {
      return tree.title.toLowerCase().includes(treeName.toLowerCase())
    })
  }

}
