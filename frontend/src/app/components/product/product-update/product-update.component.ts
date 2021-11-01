import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
    product : Product;
   
  constructor(
    private productService : ProductService, 
    private router : Router, 
    private route : ActivatedRoute){ 
    this.product = { };
    
  }

  ngOnInit(): void {

   const id = ""+ this.route.snapshot.paramMap.get("id");
   id && this.productService.readById(id).subscribe(product => this.product = product );



  }

  updateProduct(): void{

  }

  cancel(): void{
    this.router.navigate(['/products'])
  }
}
