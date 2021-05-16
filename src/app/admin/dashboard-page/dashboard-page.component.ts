import { Component, OnInit } from '@angular/core';
import {TreeService} from '../../shared/tree.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {
  trees = [];
  tSub: Subscription;
  rSub: Subscription;
  treeName;
  constructor (
    private treeService: TreeService,
  ) { }

  ngOnInit() {
    this.tSub = this.treeService.getAll().subscribe(trees => {
      console.log(trees);
      this.trees = trees;
    })
  }
  ngOnDestroy() {
    if (this.tSub) {
      this.tSub.unsubscribe();
    }
    if (this.rSub) {
      this.rSub.unsubscribe();
    }
  }
  remove (id) {
    this.rSub = this.treeService.remove(id).subscribe(() => {
      this.trees = this.trees.filter(tree => tree.id != id);
    })
  }
}
