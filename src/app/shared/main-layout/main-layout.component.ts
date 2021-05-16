import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {TreeService} from '../tree.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  type = 'Jabłonie';
  public isMenuCollapsed = true;
  constructor(
    private router: Router,
    private treeService: TreeService,
  ) { }

  ngOnInit() {
  }

  setType(type) {
    this.type = type;
    if (this.type !=='Cart') {
      this.router.navigate(['/'], {
        queryParams: {
          type: this.type
        }
      })
      this.treeService.setType(this.type);
    }
  }
}
