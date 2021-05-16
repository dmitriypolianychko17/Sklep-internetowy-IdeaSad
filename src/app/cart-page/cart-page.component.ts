import { Component, OnInit } from '@angular/core';
import {TreeService} from '../shared/tree.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {OrderService} from '../shared/order.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {
  cartTrees = [];
  totalPrice = 0;
  added = '';
  form: FormGroup;
  submitted = false;
  constructor(
    private treeService: TreeService,
    private orderService: OrderService,
  ) { }

  ngOnInit() {
    this.cartTrees =this.treeService.cartTrees;
    for (let i = 0; i < this.cartTrees.length; i++) {
      this.totalPrice += +this.cartTrees[i].price;
    }
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      phone: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required),
      payment: new FormControl(null, Validators.required),
    });
  }
  submit() {
    if (this.form.invalid) {
      return;
    }
    this.submitted = true;
    const order = {
      name: this.form.value.name,
      phone: this.form.value.phone,
      address: this.form.value.address,
      payment: this.form.value.payment,
      orders: this.cartTrees,
      price: this.totalPrice,
      date: new Date()
    };
    console.log(this.form);
    this.orderService.create(order).subscribe(res => {
      this.form.reset();
      this.added = 'Zamówienie zostało zrealizowane';
      this.submitted = false;
   });
  }
  delete(tree) {
    this.totalPrice -= +tree.price;
    this.cartTrees.splice(this.cartTrees.indexOf(tree), 1);
  }

}
