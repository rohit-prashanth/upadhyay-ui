import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageHandlerService } from 'src/app/shared/service/localstoragehandlerService';
import { commonConstants } from 'src/app/utils/commonconstant';

@Injectable()
export class UserService {
  constructor(
    private http:HttpClient,
    private localStorageHandler: LocalStorageHandlerService
    ) { }

  public getUserData(authToken: any){
    const apiUrl = 'http://127.0.0.1:8000/view-user/';
    const bearerToken = `Bearer ${authToken}`
    const httpHeaders: HttpHeaders = new HttpHeaders({
      "Authorization": bearerToken
    });
    return this.http.get(apiUrl,{'headers': httpHeaders})
  }
}
