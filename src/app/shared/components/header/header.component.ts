import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() config: any;
  public currentPath!:String;
  constructor(private router: Router,
    private route: ActivatedRoute,
    public loaction: Location){}
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
}
