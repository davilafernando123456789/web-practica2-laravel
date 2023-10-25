import { Component } from '@angular/core';

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.css']
})
export class ProductManagementComponent {
  products: Product[] = [];
  newProduct: Product = new Product();
  editMode = false;
  editedProductIndex = -1;

  addProduct() {
    if (this.editMode) {
      // Edit existing product
      this.products[this.editedProductIndex] = { ...this.newProduct };
      this.editMode = false;
    } else {
      // Add new product
      this.products.push({ ...this.newProduct });
    }
    this.newProduct = new Product();
  }

  deleteProduct(index: number) {
    this.products.splice(index, 1);
  }

  editProduct(index: number) {
    this.editMode = true;
    this.editedProductIndex = index;
    this.newProduct = { ...this.products[index] };
  }

  cancelEdit() {
    this.editMode = false;
    this.newProduct = new Product();
  }
}

export class Product {
  codigo: string ='';
  descripcion: string='';
  precio: number=0;
}
