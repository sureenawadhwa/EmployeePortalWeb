import { Injectable } from "@angular/core";
import { IProduct } from "./product";
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import{ catchError, tap} from 'rxjs/operators';
import { IFilter } from "../filter/filter";
import { post } from "selenium-webdriver/http";

@Injectable({
    providedIn :'root'
})

export class ProductService {

    /* API to fetch data from database */
    private productUrl = 'http://localhost:8080/employee';

    constructor(private http:HttpClient) {}

    /*getFoodType():Observable<any> {
      return this.http.get<any>(this.productUrl).pipe(
        tap(data => console.log('All: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );

    }*/

    getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl).pipe(IProduct
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
    getData() {


  }
  /*fetches the data where typeOfFood = 'value' */
    /*getProductsById(value:any): Observable<IProduct[]> {
    let url:any = this.productUrl + "/" + value;
    return this.http.get<IProduct[]>(url).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );

  }*/

    /*getProductSearched(value:any): Observable<IFilter[]> {
      let url:any = this.productUrl + "/"+ value;
      return this.http.get<IFilter[]>(url).pipe(
        tap(data=> console.log('All: '+JSON.stringify(data))),
        catchError(this.handleError)
      )

    }*/

  /*post(model: any): Observable<any> {
    return this.http.post(this.productUrl, model).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }*/



        private handleError(err: HttpErrorResponse) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        errorMessage = `An error occurred: ${err.error.message}`;
        } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
        }




}
