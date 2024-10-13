import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../models/product';
import { ProductCategory } from '../../models/product-category';

@Component({
  selector: 'app-edit-products',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './edit-products.component.html',
  styleUrl: './edit-products.component.css'
})
export class EditProductsComponent implements OnInit{

  constructor(private service:ProductsService,private router:Router,private route:ActivatedRoute){}
  productObj:Product={
    productID:0,name:'',productNumber:'',color:'',
    standardCost:0,listPrice:0,size:0,weight:0,productCategoryID:0
  }
   
    productList:Product[]=[];

    productCategory:ProductCategory={
      name:'',productCategoryID:0,products:[]
    }
  ngOnInit(): void {
   this.route.paramMap.subscribe({
    next:(params)=>{
      const id=params.get('id');
      if(id){
        this.service.getCategoryAndProductById(Number(id)).subscribe({
          next:(res)=>{
            this.productList=res.products;
            this.productCategory={
            productCategoryID:res.productCategoryID,
            name:res.name,
            products:this.productList
            }
          }
        })
      }
    }
   })
  }
  addProduct(){
    if(this.productObj.name!='' && this.productObj.name!=null){
      var exp=JSON.stringify(this.productObj);
      var obj=JSON.parse(exp);
      this.productList.unshift(obj);

      this.productObj={
        productID:0,name:'',productNumber:'',color:'',
        standardCost:0,listPrice:0,size:0,weight:0,productCategoryID:0
      }
    }
  }
  deleteProduct(p:Product,array:any[]){
  const row=array.findIndex((obj)=>obj.name==p.name && obj.color==p.color && obj.productNumber==p.productNumber);
    if(row>-1){
      array.splice(row,1)
    }
  }
  updateProductCategory() {
    this.service.updateProductAndCategory(this.productCategory.productCategoryID,this.productCategory).subscribe({
      next:()=>{
        alert("Update Successfully");
        // this.route
        this.router.navigate(['/products']);
      }
    })
  }
}
