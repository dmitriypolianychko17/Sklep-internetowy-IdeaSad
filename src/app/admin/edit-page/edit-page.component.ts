import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TreeService} from '../../shared/tree.service';
import {switchMap} from 'rxjs/operators';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Tree} from '../../shared/interfaces';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit {
  form: FormGroup;
  tree: Tree;
  submitted = false;
  constructor(
    private route: ActivatedRoute,
    private treeService: TreeService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.route.params.pipe(
      switchMap(params => {
        return this.treeService.getById(params['id']);
      })
    ).subscribe(tree => {
      this.tree = tree;
      this.form = new FormGroup({
        type: new FormControl(this.tree.type, Validators.required),
        title: new FormControl(this.tree.title, Validators.required),
        photo: new FormControl(this.tree.photo, Validators.required),
        info: new FormControl(this.tree.info, Validators.required),
        price: new FormControl(this.tree.price, Validators.required),
      })
    })
  }
  submit() {
    if (this.form.invalid) {
      return;
    }
    this.submitted = true;
    this.treeService.update({
      ...this.tree,
      type: this.form.value.type,
      title: this.form.value.title,
      photo: this.form.value.photo,
      info: this.form.value.info,
      price: this.form.value.price,
      date: new Date()
    }).subscribe(res => {
      this.submitted = false;
      this.router.navigate(['/admin', 'dashboard'])
    });
  }

}
