import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl   } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  public submitted: boolean = false;
  constructor(private fb: FormBuilder) {
  }
  ngOnInit() {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
  };

  public onSubmit(){
    this.submitted = true;
  }
  
}
