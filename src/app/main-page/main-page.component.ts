import { Component, OnInit } from '@angular/core';
import {TreeService} from '../shared/tree.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  trees$
  constructor(
    public treeService: TreeService
  ) { }

  ngOnInit() {
    this.trees$ = this.treeService.getAll()
  }

}
