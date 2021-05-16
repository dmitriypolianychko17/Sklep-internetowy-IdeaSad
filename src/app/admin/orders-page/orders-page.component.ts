import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {OrderService} from '../../shared/order.service';

@Component({
  selector: 'app-orders-page',
  templateUrl: './orders-page.component.html',
  styleUrls: ['./orders-page.component.scss']
})
export class OrdersPageComponent implements OnInit {
  orders = [];
  tSub: Subscription;
  rSub: Subscription;
  constructor (
    private orderService: OrderService,
  ) { }

  ngOnInit() {
    this.tSub = this.orderService.getAll().subscribe(orders => {
      this.orders = orders;
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
    this.rSub = this.orderService.remove(id).subscribe(() => {
      this.orders = this.orders.filter(order => order.id != id);
    })
  }

}
