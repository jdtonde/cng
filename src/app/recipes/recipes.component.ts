import { Component, OnInit } from '@angular/core';
import { Recipes } from './recipes.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipe: Recipes[]= [
    new Recipes("Steak","this is a test but meat",30,"https://c.pxhere.com/photos/c6/93/Beef_Foods_Meat_Meats_Steak_Steaks-1621668.jpg!d")
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
