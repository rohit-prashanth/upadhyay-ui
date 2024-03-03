import { HttpClient } from '@angular/common/http';
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
  constructor(private fb: FormBuilder,
    private http: HttpClient) {
  }
  ngOnInit() {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
  };

  public onSubmit(){
    this.submitted = true;
    if(this.loginForm.valid){
      const payload = {
        userName: this.loginForm.controls['userName'].value,
        password: this.loginForm.controls['password'].value
      }
      this.http.post('http://127.0.0.1:8000/login/', payload).subscribe((res)=>{
        if(!res.hasOwnProperty('error')){
          alert("successfully logged in");
        }
      })
    }
  }
  
}

