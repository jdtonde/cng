import { Component, OnInit } from '@angular/core';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
   faCaretDown=faCaretDown;
  constructor() { }

  ngOnInit(): void {
  }

}
