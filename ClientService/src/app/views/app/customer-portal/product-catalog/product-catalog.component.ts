import { Component, ViewChild } from '@angular/core';
import { HotkeysService, Hotkey } from 'angular2-hotkeys';
import { ContextMenuComponent } from 'ngx-contextmenu';
import { IProduct } from '../../../../data/products';
import products from '../../../../data/products';
import { PageEvent } from '@angular/material/paginator';
import { ProductCatalogDetailComponent } from 'src/app/containers/pages/product-catalog-detail/product-catalog-detail.component';
import { ProductCatalogService } from './product-catalog.service';

@Component({
  selector: 'app-product-catalog',
  templateUrl: './product-catalog.component.html',
})
export class ProductCatalogComponent {
  displayMode = 'image';
  selectAllState = '';
  selected: IProduct[] = [];
  data: IProduct[];
  product: any[];
  // data: IProduct[] = products.slice(0, 20);
  //test paging
  length: number;
  pageSize = 9;
  selectproduct: IProduct;

  productTest: IProduct[];
  // productTest: IProduct[] = products.slice(0, this.pageSize);
  @ViewChild('productDetailModal', { static: true })
  productDetailModal: ProductCatalogDetailComponent;

  constructor(private productCatalogService: ProductCatalogService) {
    // console.log('len', this.data.length);
  }

  ngOnInit() {
    let BYD = JSON.parse(localStorage.getItem('BYD'));
    BYD.password = atob(BYD.password);
    let id = 'PCG_000000000002';
    this.product = [];
    this.productCatalogService
      .getProductCategoryByID(id, BYD)
      .subscribe((i) => {
        // console.log(i[0].ProductCatalogueVersionCatalogueItem);
        i[0].ProductCatalogueVersionCatalogueItem.forEach((ele) => {
          let productObj = {
            id: ele.ProductID,
            title:
              ele.ProductCatalogueVersionCatalogueItemDescription[0]
                .CatalogueItemDescription,
            status: 'Active',
            statusColor: 'secondary',
            img: ele.ProductCatalogueVersionCatalogueItemAttachmentFolder[0]
              ?.LinkWebURI,
            // img: '/assets/img/products/marble-cake-thumb.jpg',
            date: parseFloat(ele.Amount).toFixed(2), //price
          };
          this.product.push(productObj);
        });
        console.log(this.product);

        this.data = this.product;
        this.length = this.data.length;
        console.log(
          'length of products',
          this.data.length,
          'test',
          this.length
        );
        this.productTest = this.product.slice(0, this.pageSize);
      });
  }
  changeDisplayMode(mode): void {
    this.displayMode = mode;
  }

  isSelected(p: IProduct): boolean {
    return this.selected.findIndex((x) => x.id === p.id) > -1;
  }
  onSelect(item: IProduct): void {
    if (this.isSelected(item)) {
      this.selected = this.selected.filter((x) => x.id !== item.id);
    } else {
      this.selected.push(item);
    }
    this.setSelectAllState();
  }

  setSelectAllState(): void {
    if (this.selected.length === this.data.length) {
      this.selectAllState = 'checked';
    } else if (this.selected.length !== 0) {
      this.selectAllState = 'indeterminate';
    } else {
      this.selectAllState = '';
    }
  }

  selectAllChange($event): void {
    if ($event.target.checked) {
      this.selected = [...this.data];
    } else {
      this.selected = [];
    }
    this.setSelectAllState();
  }
  searchKeyUp(event): void {
    const val = event.target.value.toLowerCase().trim();
    // this.loadData(this.itemsPerPage, 1, val, this.orderBy);
  }
  updateCards(event) {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    console.log(
      'event',
      event,
      'index',
      event.page,
      'size',
      event.itemsPerPage
    );
    this.productTest = this.data.slice(startItem, endItem);
    console.log('products', this.productTest);
  }
  showProductDetail(product: IProduct): void {
    this.selectproduct = product;
    // console.log(this.selectproduct);

    this.productDetailModal.showModal(product);
  }
}
