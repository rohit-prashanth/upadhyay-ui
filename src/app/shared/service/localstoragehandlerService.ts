import { Injectable } from "@angular/core";

@Injectable(    )
export class LocalStorageHandlerService {
    public setData(storageKey: string, value: string){
        return localStorage.setItem(storageKey, value);
    }

    public getData(storageKey: string){
        return localStorage.getItem(storageKey)
    }

    public clearData(){
        localStorage.clear();
    }
}