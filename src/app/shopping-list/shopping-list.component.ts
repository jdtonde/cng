import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
<<<<<<< HEAD
 ingredient:Ingredients[]=[
  new Ingredients("Oignons",5),
  new Ingredients("Tomatoes",7),
  
 ];
=======
 ingredients=[];
>>>>>>> b1ae6d98849a3298f38f23110282fb7e13bf7bc7
  constructor() { }

  ngOnInit(): void {
  }

}
