import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
 ingredient:Ingredients[]=[
  new Ingredients("Oignons",5),
  new Ingredients("Tomatoes",7),
  
 ];
  constructor() { }

  ngOnInit(): void {
  }

}
