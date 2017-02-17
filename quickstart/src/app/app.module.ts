import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { RecipeListComponent }  from './recipes/recipe-list.component';
import { FooterComponent }  from './footer/footer.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, RecipeListComponent, FooterComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
