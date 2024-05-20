import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../service/order.service';
import { Order } from '../../common/order';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.css',
})
export class OrderListComponent implements OnInit {
  panelOpenState = false;
  orders: Order[] = [];

  length = 50;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];

  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;

  pageEvent!: PageEvent;

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.listOrder();
  }
  
  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.listOrder();
    //console.log(this.orders);
  }

  listOrder() {
    this.orderService
      .getOrderListPaginate(this.pageIndex, this.pageSize)
      .subscribe(this.listOrderResult());
  }

  listOrderResult() {
    return (data: any) => {
      this.orders = data.content;
      this.pageIndex = data.pageable.pageNumber;
      this.length = data.totalElements;
      this.pageSize = data.pageable.pageSize;
    };
  }
}
