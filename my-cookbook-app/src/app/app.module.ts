import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './core/header/header.component';
import {RecipesComponent} from './features/recipes/recipes.component';
import {RecipeListComponent} from './features/recipes/recipe-list/recipe-list.component';
import {RecipeItemComponent} from './features/recipes/recipe-list/recipe-item/recipe-item.component';
import {FormsModule} from "@angular/forms";
import {DropdownDirective} from "./shared/directives/dropdown.directive";
import {ShopComponent} from './features/shop/shop.component';
import {ShopControlsComponent} from "./features/shop/components/shop-controls/shop-controls.component";
import {ShopListItemComponent} from "./features/shop/components/shop-list/shop-list-item/shop-list-item.component";
import {ShopListComponent} from "./features/shop/components/shop-list/shop-list.component";
import {AppRoutingModule} from "./app-routing.module";
import {RecipeDetailsComponent} from "./features/recipes/recipe-details/recipe-details.component";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    RecipeItemComponent,
    DropdownDirective,
    ShopComponent,
    ShopControlsComponent,
    ShopListComponent,
    ShopListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
