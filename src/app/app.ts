import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navi } from './comps/navi/navi';
import { Products } from './component/products/products';
import { ProductsList } from './component/products/products-list/products-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navi, Products, ProductsList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('midtermApp');
}
