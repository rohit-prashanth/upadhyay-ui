import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl   } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageHandlerService } from 'src/app/shared/service/localstoragehandlerService';
import { commonConstants } from 'src/app/utils/commonconstant';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[LocalStorageHandlerService]
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  public submitted: boolean = false;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private localStoargeHandler: LocalStorageHandlerService,
    private router: Router
    ) {}
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
      this.http.post('http://127.0.0.1:8000/login/', payload).subscribe((res: any)=>{
        if(!res.hasOwnProperty('error')){
          console.log(res, 'login response');
          this.localStoargeHandler.setData(commonConstants.storageKeys.authToken, res.token.access);
          this.localStoargeHandler.setData(commonConstants.storageKeys.refreshToken, res.token.refresh);
          this.router.navigateByUrl('user');
        }
      })
    }
  }
  
}

