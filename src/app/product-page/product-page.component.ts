import { Component, OnInit } from '@angular/core';
import {TreeService} from '../shared/tree.service';
import {ActivatedRoute} from '@angular/router';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  tree$
  constructor(
    private treeService: TreeService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.tree$ = this.route.params
      .pipe(switchMap(params => {
        return this.treeService.getById(params['id'])
      }))
    }
  addTree(tree) {
    this.treeService.addTree(tree);
  }
}
