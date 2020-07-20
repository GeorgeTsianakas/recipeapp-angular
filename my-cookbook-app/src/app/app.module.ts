import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ShoppingListService} from "./shopping-list/shopping-list.service";
import {RecipeService} from "./recipes/recipe.service";
import {HeaderComponent} from "./header/header.component";
import {RecipesComponent} from "./recipes/recipes.component";
import {RecipeListComponent} from "./recipes/recipe-list/recipe-list.component";
import {RecipeItemComponent} from "./recipes/recipe-list/recipe-item/recipe-item.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {ShoppingEditComponent} from "./shopping-list/shopping-edit/shopping-edit.component";
import {DropdownDirective} from "./shared/directives/dropdown.directive";
import {ErrorPageComponent} from "./error-page/error-page.component";
import {RecipeDetailPlaceholderComponent} from "./recipes/recipe-detail-placeholder/recipe-detail-placeholder.component";
import {RecipeEditComponent} from './recipes/recipe-edit/recipe-edit.component';
import {RecipeDetailComponent} from './recipes/recipe-detail/recipe-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    ErrorPageComponent,
    RecipeDetailPlaceholderComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [ShoppingListService, RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
