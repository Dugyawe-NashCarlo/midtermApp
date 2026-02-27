import { Routes } from '@angular/router';
import {Attribute} from './databinding/attribute/attribute';
import {Class} from './databinding/class/class';
import {Style} from './databinding/style/style';
import { Home } from './comps/home/home';
import { Property } from './databinding/property/property';
import { TwoWay } from './databinding/two-way/two-way';
import { Event } from './databinding/event/event';
import { Interpolation } from './databinding/interpolation/interpolation';

export const routes: Routes = [
    {path: 'home', component: Home},
    {path: 'interpolation', component: Interpolation},
    {path: 'property', component: Property},
    {path: 'event', component: Event},
    {path: 'two-way', component: TwoWay},
    {path: 'attribute', component: Attribute},
    {path: 'class', component: Class},
    {path: 'style', component: Style},
    {path: '', redirectTo: 'home', pathMatch: 'full'}
];
