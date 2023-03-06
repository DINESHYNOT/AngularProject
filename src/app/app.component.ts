import { Component,ViewChild,AfterViewInit} from '@angular/core';
// import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'My first app';
  // id:number = 127

  // @ViewChild(SidebarComponent) childcomp;
  // constructor() {
  //   console.log(this.childcomp);
  // }
  // ngAfterViewInit(): void {
  //   console.log(this.childcomp);
  // }
}
