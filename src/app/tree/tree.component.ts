import {Component, Input, OnInit} from '@angular/core';
import {TreeService} from '../shared/tree.service';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {
@Input() tree
  constructor(
    private treeService : TreeService,
  ) { }

  ngOnInit() {
  }

  addTree(tree) {
    this.treeService.addTree(tree);
  }

}
