import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../common/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = "http://localhost:8080/api/v1/product/all";

  constructor(private httpClient: HttpClient) { }

  getProductListPaginate(thePage: number, theSize: number): Observable<GetProductList> {
    const paginateUrl = `${this.baseUrl}?page=${thePage}&size=${theSize}`
    return this.httpClient.get<GetProductList>(paginateUrl);
  }
}

interface GetProductList {
  content : {
    products: Product[];
  };
  pageable:{
    pageNumber: number,
    pageSize: number,
    totalPages: number,
    totalElements: number,
    numberOfElements: number
  };
}