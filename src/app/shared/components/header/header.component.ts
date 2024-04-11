import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageHandlerService } from '../../service/localstoragehandlerService';
import { ConfigService } from '../../service/config.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { commonConstants } from 'src/app/utils/commonconstant';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() config: any;
  public currentPath!:String;
  public displayLogoutMenu: boolean = false;
  constructor(private router: Router,
    private route: ActivatedRoute,
    public loaction: Location,
    private localStorageHandler: LocalStorageHandlerService,
    private http: HttpClient){}
  ngOnInit(): void {
    console.log(this.loaction.path(), 'header route')
    this.currentPath = this.loaction.path().split('/')[this.loaction.path().split('/').length-1].toLowerCase();
    console.log(this.loaction.path().split('/'))

  }
  public navigateToChild(path: string){
    this.router.navigateByUrl(path);  
  }

  public getChildPath(path:string){
    return path.split('/')[path.split('/').length-1]
  }
  public logoutUser(){
    const url = ConfigService.getInstance().getConfigObject().APIURL.logoutUser;
    const authToken = this.localStorageHandler.getData(commonConstants.storageKeys.authToken)
    const bearerToken = `Bearer ${authToken}`
    const httpHeaders: HttpHeaders = new HttpHeaders({
      "Authorization": bearerToken
    });
    this.http.post(url, '', {headers: httpHeaders}).subscribe((res)=>{
      if(!res.hasOwnProperty('error')){
        this.localStorageHandler.clearData();
        this.router.navigateByUrl('');
      }
    })
  }
}
