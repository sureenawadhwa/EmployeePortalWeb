
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { IfStmt } from '@angular/compiler';

@Component({
  templateUrl: './login.component.html',
  styles: ['./login.component.css'],
  providers: [LoginService]
})


export class LoginComponent {
  public pageTitle = 'Login';

  constructor(private service: LoginService, private route: Router) {
  }

  name: string;
  empId: string;

  msgErrorName: string ='';
  msgErrorEmpId: string = '';
  msgError: string = '';

  onSubmit(){
    let error: number = 0;
    this.msgError = "";
    this.msgErrorName = "";
    this.msgErrorEmpId = "";
    if(this.name == undefined && this.name == ""){
      this.msgErrorName = "Enter Name";
      error++;
    }
    if(this.empId == undefined && this.empId == ""){
      this.msgErrorEmpId =  "Enter Id"
      error++;
    }
    if(error == 0){
      let model: any = { Name : this.name, EmpId : this.empId };
      this.service.post(model).subscribe(res=>{
        if(res.length > 0){
          this.route.navigateByUrl("products");
        }
        else{
          this.msgError = "Invalid User";
        }
      },error=>{
        console.log(error);
      })
    }
    
  }

}
