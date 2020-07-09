import {Component, OnInit} from '@angular/core';
import { IProduct } from './product';


import { ProductService } from './product.service';
import { NgIf } from '@angular/common';
import { IFilter } from '../filter/filter';



@Component ({                                                                                                       //Component decorator
    selector : 'pm-products',
    templateUrl:'./product-list.component.html',
    styleUrls: ['./product-list.component.css'],
})


export class ProductListComponent implements OnInit {
    pageTitle:string = 'Employee List';

    errorMessage: string;
    products: IProduct[];

   // filter: IFilter = {};


    /*get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value:string) {
        this._listFilter = value;
        this.filteredProducts = this._listFilter ? this.performFilterbyLetter(this._listFilter) : this.products;
    }*/





    constructor(private productService: ProductService) {
    }



    /* filter function using name (letters) */
    /*performFilterbyLetter(filterBy: any): IProduct[] {

        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
        product.item_name.toLocaleLowerCase().indexOf(filterBy) !=-1 || product.type_food.toLocaleLowerCase().indexOf(filterBy) !=-1 || product.price.toLocaleString().indexOf(filterBy) != -1);


    }*/



    ngOnInit():{
          this.http.get('http://localhost:8080/employee');

        //this.getFoodType();
        //this.productService.getProducts();
        /*.subscribe(
            products => {
                this.products = products
                this.filteredProducts= this.products;
            },
            err => { this.errorMessage = err}
        );*/
        //this.getData();

    }


   /*getFoodType():void{
    this.productService.getFoodType().subscribe(res=>{
        this.foodTypeOption = res;
    }, error => {
        console.log(error);
    });
   }*/



    /*getData(): void {
        this.productService.post(this.filter).subscribe(res => {
            this.filteredProducts = res;
        }, error => {
            console.log(error);
        });
    }*/

    /*onSearch(){
        let error:number = 0;
        this.msgErrorPriceCondtion = "";
        if(this.Price != null && this.Price != '' && this.priceCondtion == ''){
            error++;
            this.msgErrorPriceCondtion = "Select condition.";
        }

        if(error == 0){
            this.filter.FoodType  = this.foodType ? this.foodType : "";
            this.filter.price= this.Price? this.Price: null;
            this.filter.priceCondition = this.priceCondtion ? Number(this.priceCondtion) : null;
            this.getData();
        }


    }*/

}
