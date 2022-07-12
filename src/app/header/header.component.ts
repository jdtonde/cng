import { Component, OnInit } from '@angular/core';
import { faCaretDown,faAngleDown } from '@fortawesome/free-solid-svg-icons'; 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  faCaretDown = faCaretDown;
  faAngleDown=faAngleDown;
  
  constructor() { }

  ngOnInit(): void {
  }

}
