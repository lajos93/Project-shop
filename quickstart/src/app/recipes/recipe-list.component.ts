import { Component } from '@angular/core';

@Component({
  selector: "recipe-list",
  templateUrl:"./app/recipes/recipe-list.component.html"
})
export class RecipeListComponent  { 
	recipes: any = [{
		"id" : 1,
		"name" : "Strawberry tart",
		"description" : "Make the best strawberry tart there is",
		"method" : "Lorem ipsum dolor sit amet, conscettur adipusisdas eli",
		"ingredients" : ["300g flour", "400g strawberries", "4 eggs"],
		"image" : "app/assets/recipe-1.jpg",
		"preptime" : 11,
		"cookingtime" : 70
		},
		{

		"id" : 2,
		"name" : "Apple Pie",
		"description" : "To make apple pie, peel and slice the apple",
		"method" : "Lorem ipsum dolor sit amet, conscettur adipusisdas eli",
		"ingredients" : ["500g flour", "200g strawberries", "1 eggs"],
		"image" : "app/assets/recipe-2.jpg",
		"preptime" : 11,
		"cookingtime" : 90
		}];
		totalTimeForRecipe(recipe:any) :number{
			return recipe.preptime + recipe.cookingtime;
		}
 }



