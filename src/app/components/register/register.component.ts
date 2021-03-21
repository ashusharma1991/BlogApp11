import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormBuilder,
  FormControl,
  FormGroup
} from "@angular/forms";
import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  submitted = false;
  error = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  form = this.fb.group({
    username: ["", Validators.required],
    password: ["", Validators.required]
  });

 ngOnInit(): void {
   
  }

  get usernameControl() {
    return this.form.get("username") as FormControl;
  }

  get passwordControl() {
    return this.form.get("password") as FormControl;
  }

  register(form: FormGroup) {
    
    this.submitted = true;
    const { value, valid } = form;
    if (valid) {
      console.log("enter");
      this.authService.register(value.username, value.password).subscribe(
        data => {
          this.form.reset()
          this.submitted = false;
          //console.log(data);
        },
        error => {
          this.error = true;
        }
      );
    }
    else{
      console.log("value not valid");
    }
  }

}
