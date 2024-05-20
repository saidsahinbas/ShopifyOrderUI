import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Order } from '../common/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private baseUrl = "http://localhost:8080/api/v1/all-orders"

  constructor(private httpClient: HttpClient) { }

  getOrderListPaginate(thePage: number, theSize: number): Observable<GetResponseOrders> {
    const paginateUrl = `${this.baseUrl}?page=${thePage}&size=${theSize}`
    return this.httpClient.get<GetResponseOrders>(paginateUrl);
  }
}

interface GetResponseOrders {
  content: {
    orders: Order[];
  };
  pageable:{
    pageNumber: number,
    pageSize: number,
    totalPages: number,
    totalElements: number,
    numberOfElements: number
  } 
}
