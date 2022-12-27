import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { StructuralDirectivesComponent } from './Directives/structural-directives/structural-directives.component';
import { HeaderComponent } from './NewApp/header/header.component';
import { RecipeDetailsComponent } from './NewApp/recipes/recipe-details/recipe-details.component';
import { RecipeItemComponent } from './NewApp/recipes/recipes-list/recipe-item/recipe-item.component';
import { RecipesListComponent } from './NewApp/recipes/recipes-list/recipes-list.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent,StructuralDirectivesComponent ,HeaderComponent,RecipeDetailsComponent,RecipeItemComponent,RecipesListComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
