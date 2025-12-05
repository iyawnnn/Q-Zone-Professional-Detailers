import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { EmployeeDirectory } from './pages/employee-directory/employee-directory';
import { About } from './pages/about/about';
import { ProductsServices } from './pages/products-services/products-services';
import { PageNotFound } from './pages/page-not-found/page-not-found';

export const routes: Routes = [
  { path: '', component: Home, title: 'Home | Q-Zone Professional Detailers' },
  { path: 'employees', component: EmployeeDirectory, title: 'Employee | Q-Zone Professional Detailers' },
  { path: 'about', component: About, title: 'About | Q-Zone Professional Detailers' },
  { path: 'services', component: ProductsServices, title: 'Services | Q-Zone Professional Detailers' },
  { path: '**', component: PageNotFound, title: 'Page not Found | Q-Zone Professional Detailers' }
];
