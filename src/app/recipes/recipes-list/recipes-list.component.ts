import { Component, OnInit } from '@angular/core';
import { Recipes } from '../recipes.model';
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipe: Recipes[]= [
    new Recipes("Steak","This is a description test but meat",30,"https://c.pxhere.com/photos/c6/93/Beef_Foods_Meat_Meats_Steak_Steaks-1621668.jpg!d"),
    new Recipes("Steak","This is a description test but meat",30,"https://c.pxhere.com/photos/c6/93/Beef_Foods_Meat_Meats_Steak_Steaks-1621668.jpg!d")

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
