import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headerandnavigation',
  templateUrl: './headerandnavigation.component.html',
  styleUrls: ['./headerandnavigation.component.css']
})
export class HeaderandnavigationComponent implements OnInit {


  private fullMenuView : boolean = true;
  constructor() { }

  ngOnInit() {
  }

  toggleMenu():void {
    console.log("toggeling menu");
    this.fullMenuView = !this.fullMenuView;
}


}
