import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from 'src/app/shared/service/config.service';

@Injectable()
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }
  postUserData(payload: any){
    const url = ConfigService.getInstance().getConfigObject().APIURL.loginUser;
    return this.http.post(url, payload)
  }
}
