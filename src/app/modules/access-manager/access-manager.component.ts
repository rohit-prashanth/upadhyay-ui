import { Component } from '@angular/core';
import{AccessManagerBase} from './access-manger-base';

@Component({
  selector: 'app-access-manager',
  templateUrl: './access-manager.component.html',
  styleUrls: ['./access-manager.component.scss']
})
export class AccessManagerComponent extends AccessManagerBase{
  super(){}
}
