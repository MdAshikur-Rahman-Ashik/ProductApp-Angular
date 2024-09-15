import { Routes } from '@angular/router';
import { ViewProductsComponent } from './components/view-products/view-products.component';
import { AddProductsComponent } from './components/add-products/add-products.component';
import { EditProductsComponent } from './components/edit-products/edit-products.component';

export const routes: Routes = [
   {path:"",component:ViewProductsComponent},
   {path:"products",component:ViewProductsComponent},
   {path:"addProduct",component:AddProductsComponent},
   {path:"addProduct/edit/:id",component:EditProductsComponent},
   
];
