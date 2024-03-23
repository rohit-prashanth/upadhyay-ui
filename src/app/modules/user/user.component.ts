import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { LocalStorageHandlerService } from 'src/app/shared/service/localstoragehandlerService';
import { commonConstants } from 'src/app/utils/commonconstant';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers:[UserService, LocalStorageHandlerService]
})
export class UserComponent implements OnInit {
  public userData: any;
  constructor( private userService: UserService,
    private localStorageHandler: LocalStorageHandlerService){}
  ngOnInit(){
    const authToken = this.localStorageHandler.getData(commonConstants.storageKeys.authToken)
    this.userService.getUserData(authToken).subscribe((res: any) =>{
      if(!res.hasOwnProperty('error')){
        this.userData = res;
        console.log(this.userData, 'user data')
      }
    })
  }
}
