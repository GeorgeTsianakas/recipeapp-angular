import {Injectable, EventEmitter} from "@angular/core";
import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/model/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Schnitzel',
      'A super-tasty Schnitzel',
      'Google an image',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe(
      'Burger',
      'A super-tasty Burger',
      'Google an image',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ])
  ];

  constructor(private slService: ShoppingListService) {
  }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  getRecipe(id: number): Recipe {
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]): void {
    this.slService.addIngredients(ingredients);
  }

}
