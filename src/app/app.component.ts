import { Component } from '@angular/core';
import { FormControl, FormGroup,FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'pm-root',
  template: `


  <div class='container'>
    <router-outlet></router-outlet>
  </div>

  `,
  //styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle:string ='';
  title = 'app';
  angularForm = new FormGroup ({
    name: new FormControl()
  });
  constructor(private fb: FormBuilder) { // <--- inject FormBuilder
    this.createForm();
  }
  createForm() {
    this.angularForm = this.fb.group({
      name: ['', Validators.required],
      emp_ID: [' ', Validators.required]
    });
  }
  ngOnInit(): {
   this.http.get('http://localhost:8080/employee');
  }

}
