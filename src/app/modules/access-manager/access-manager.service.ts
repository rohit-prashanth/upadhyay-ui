import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AccessManagerService {

  constructor(private http: HttpClient) { }
  
}
