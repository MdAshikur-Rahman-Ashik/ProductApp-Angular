import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ProductCategory } from '../../models/product-category';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-view-products',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './view-products.component.html',
  styleUrl: './view-products.component.css'
})
export class ViewProductsComponent implements OnInit {

  constructor(private service:ProductsService,private router:Router){}
  productList:ProductCategory[]=[];
  ngOnInit(): void {
     this.getList();
  }

  getList(){
    this.service.getAllProductWithCategory().subscribe(res=>{
      this.productList=res;
    })
  }

  deleteItem(category:ProductCategory){
  const isConfirm=confirm("Are Your sure to delete this"+category.name);
  if(isConfirm){
    this.service.deleteProductWithCategory(category.productCategoryID).subscribe((res)=>{
      alert("Delete Successfully");
      this.getList();
    })
  }
  }
}
