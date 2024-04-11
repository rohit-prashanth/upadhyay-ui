import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from 'src/app/shared/service/config.service';
import { LocalStorageHandlerService } from 'src/app/shared/service/localstoragehandlerService';
import { commonConstants } from 'src/app/utils/commonconstant';

@Injectable()
export class UserService {
  constructor(
    private http:HttpClient,
    private localStorageHandler: LocalStorageHandlerService
    ) { }

  public getUserData(authToken: any){
    const apiUrl = ConfigService.getInstance().getConfigObject().APIURL.viewUser;
    const bearerToken = `Bearer ${authToken}`
    const httpHeaders: HttpHeaders = new HttpHeaders({
      "Authorization": bearerToken
    });
    return this.http.get(apiUrl,{'headers': httpHeaders})
  }
}
