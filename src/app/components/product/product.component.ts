import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Product } from '../../common/product';
import { Image } from '../../common/image';
import { Variant } from '../../common/variant';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{
  products: Product[] = [];
  images: Image[] = [];
  variants: Variant[] = [];

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
    this.listProduct();
  }

  constructor(private productService: ProductService){}
  ngOnInit(): void {
    this.listProduct();
    
  }
  listProduct(){
    this.productService
    .getProductListPaginate(this.pageIndex, this.pageSize).subscribe(this.listProductResult());
  }

  listProductResult(){
    return (data: any) => {
      this.products = data.content;
      this.pageIndex = data.pageable.pageNumber;
      this.length = data.totalElements;
      this.pageSize = data.pageable.pageSize;
    }
  }
}