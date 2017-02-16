import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template:`
   <h1>{{name}}</h1>
  <h1>{{title}}</h1>
 <ul>
	<li *ngFor="let recipe of recipes">  
				   <h2>{{recipe.name}}</h2>
				   <p>{{recipe.description}}</p>
				   <p>Total time needd for this recipe:: {{totalTimeForRecipe(recipe)}}</p>
				   <p *ngIf="recipe.time < 40">Quick recipe!</p>

	</li>
</ul>
  `
})
export class AppComponent  { 
	name:string ='Web Devs';
	title = 'Our yummy recipe site';
	recipes = [{
		"id" : 1,
		"name" : "Strawberry tart",
		"description" : "Make the best strawberry tart there is",
		"ingredients" : "300g flour, 400g strawberries, 4 eggs",
		"time" : 99,
		"preptime" : 11,
		"cookingtime" : 70,
		},
		{

		"id" : 2,
		"name" : "Apple Pie",
		"description" : "To make apple pie, peel and slice the apple",
		"ingredients" : "500g apples, 400g flour, 1 eggs",
		"time" : 30,
		"preptime" : 5,
		"cookingtime" : 20,
		}];
		totalTimeForRecipe(recipe:any) :number{
			return recipe.preptime + recipe.cookingtime;
		}
 }



