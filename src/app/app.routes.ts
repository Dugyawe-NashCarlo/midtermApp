import { Routes } from '@angular/router';
import {Attribute} from './databinding/attribute/attribute';
import {Class} from './databinding/class/class';
import {Style} from './databinding/style/style';
import { Home } from './comps/home/home';
import { Interpolation } from './databinding/interpolation/interpolation';
import { Property } from './databinding/property/property';
import { TwoWay } from './databinding/two-way/two-way';
import { EventBinding } from './databinding/event-binding/event-binding';
import { Products } from './component/products/products';
import { ProductsDetails } from './component/products/products-details/products-details';
import { ProductsList } from './component/products/products-list/products-list';

export const routes: Routes = [
    {path: 'home', component: Home},
    {path: 'interpolation', component: Interpolation},
    {path: 'two-way', component: TwoWay},
    {path: 'property', component: Property},
    {path: 'event-binding', component: EventBinding},
    {path: 'attribute', component: Attribute},
    {path: 'class', component: Class},
    {path: 'style', component: Style},
    {path: 'product', component: Products},
    {path: '', redirectTo: 'home', pathMatch: 'full'},

    {path: 'products-list',
        component: ProductsList,
        children: [
    {
        path: ':id',
        children:[
            {path: 'details', component: ProductsDetails}
        ]         
    }]}
    
];
