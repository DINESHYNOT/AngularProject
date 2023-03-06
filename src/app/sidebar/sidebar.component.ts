import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  title :string = "Dinesh Kumar";
  // @Input() idno:number;

  childmsg : string = 'Message from child'

}
