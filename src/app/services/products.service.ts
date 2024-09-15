import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCategory } from '../models/product-category';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
baseUrl:string="https://localhost:7115/ProductCategories"
   constructor(private http:HttpClient) { }
  // http=inject(HttpClient);

  getAllProductWithCategory():Observable<ProductCategory[]>{
    return this.http.get<ProductCategory[]>(this.baseUrl);
  }

  deleteProductWithCategory(id:number){
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getCategoryAndProductById(cateId:number){
    return this.http.get<ProductCategory>(this.baseUrl+`/${cateId}`);
  }
  updateProductAndCategory(cateId:number,category:ProductCategory):Observable<ProductCategory>{
    return this.http.put<ProductCategory>(this.baseUrl+`/${cateId}`,category);
 }
  addProductAndCategory(category:ProductCategory):Observable<ProductCategory>{
    return this.http.post<ProductCategory>(this.baseUrl,category);
  }


}
