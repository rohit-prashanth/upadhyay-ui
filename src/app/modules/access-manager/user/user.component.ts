import { Component } from '@angular/core';
import { AccessManagerBase } from '../access-manger-base';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent extends AccessManagerBase{
  super(){}

}
