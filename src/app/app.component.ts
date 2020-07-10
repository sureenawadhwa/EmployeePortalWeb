import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './index.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  employeeList:any;
  title = 'EmployeePortalWeb';
  firstName = "";
  lastName = "";
  department = "";
  gender = null;
  dob = "";

  constructor(private http: HttpClient) {
  }

  ngOnInit(){
    let obs = this.http.get('http://localhost:8080/employee');
    obs.subscribe((response) =>  this.employeeList = response);
  }

  saveForm(){

      if(this.firstName==""){
        alert("First name Cannot be empty");
      }
      else{
        this.http.post(
              'http://localhost:8080/employee',
              {
                "firstName" :     this.firstName,
                "lastName":       this.lastName,
                "gender":         this.gender,
                "department":     this.department,
                "dateOfBirth":    this.dob
              })
              .subscribe(
              (response) => {
                  console.log(response)
                  this.ngOnInit();
              });
      }
  }
}
