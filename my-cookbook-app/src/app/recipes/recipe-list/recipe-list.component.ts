import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  @Output() selectItem = new EventEmitter<Recipe>();

  currentRecipe: Recipe;

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'Test Desc', 'Search on Google')
  ];

  onRecipeItemSelect(item: Recipe) {
    this.currentRecipe = item;
    this.selectItem.emit(item);
  }

}
