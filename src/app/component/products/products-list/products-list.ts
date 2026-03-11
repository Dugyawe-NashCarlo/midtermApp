import { Component } from '@angular/core';
import { Product } from '../../../models/product.interface';
import { CommonModule } from '@angular/common'; 
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { OnInit } from '@angular/core';
import { ProductService } from '../service/product-service';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [ CommonModule, RouterLink, RouterOutlet, FormsModule ],
  templateUrl: './products-list.html',
  styleUrl: './products-list.css',
})
export class ProductsList implements OnInit {

  products: Product[] = [];

returnUrl: string | null = null;
searchPlaceholder: string = "Search by Item Name";
selectedId: number | string | null = null;
searchTerm: string = '';
constructor(
  private productService: ProductService,
  private router: Router
){}

ngOnInit(): void{
  this.products = this.productService.getProducts();
}

getProduct(e: Product): void {
  this.selectedId = e.id;
  this.router.navigate(['/products-list', e.id, 'products-details'])
}

}
