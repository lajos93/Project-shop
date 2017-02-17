import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template:`
 <h1>{{pagetitle}}</h1>
 <recipe-list></recipe-list>
  <footer></footer>
			  
  `,
})
export class AppComponent  { 
	pagetitle:string ="My yummy recipe site";
 }



