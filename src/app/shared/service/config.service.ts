import { Injectable } from '@angular/core';
import { commonConstants } from 'src/app/utils/commonconstant';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  public static instance: ConfigService;
  public static isCreating = false;
  private config: any;

  constructor() { }

  public static getInstance(){
    if (ConfigService.instance == null){
      ConfigService.isCreating = true;
      ConfigService.instance = new ConfigService();
      ConfigService.isCreating = false;
    }
    return this.instance;
  }

  public getConfigData(){
    const baseUrlList: any = environment.serviceBaseUrls;
    const allApiUrls: any = commonConstants.APIURL;
    for(const urlKey in baseUrlList){
      if(baseUrlList[urlKey]){
        for (const key in allApiUrls){
          allApiUrls[key] = allApiUrls[key].replace(`{${urlKey}}`, baseUrlList[urlKey]);
        }
      }
    }
    const config = {APIURL: allApiUrls};
    ConfigService.getInstance().setConfigObject(config);
  }

  public setConfigObject(config: any){
    this.config = config
  }

  public getConfigObject(){
    return this.config;
  }
}
