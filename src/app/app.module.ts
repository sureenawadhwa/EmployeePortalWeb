import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule, FormControl, FormGroup, FormBuilder} from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';

import { HttpClientModule } from '@angular/common/http';


import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from "./login/login.component";








@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,





    LoginComponent




  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'', redirectTo:'login', pathMatch:'full'},
      {path: 'products', component: ProductListComponent },


      {path:'login', component: LoginComponent},



      {path: '**', redirectTo: 'login', pathMatch: 'full'}
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  }


