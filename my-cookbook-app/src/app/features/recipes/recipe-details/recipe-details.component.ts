import {Component, Input} from "@angular/core";
import {Recipe} from "../model/recipe.model";
import {RecipesService} from "../services/recipes.service";

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent {

  @Input() item: Recipe;

  constructor(
    private recipesService: RecipesService
  ) {
  }

  onMoveToShoppingList(item: Recipe): void {
    console.log('onMoveToShoppingList');
    this.recipesService.addIngredients(item.ingredients);
  }

  onEditRecipe(item: Recipe): void {
    console.log('onEditRecipe');
  }

  onDeleteRecipe(item: Recipe): void {
    console.log('onDeleteRecipe');
    // this.recipesService.delete(item);
  }

}
