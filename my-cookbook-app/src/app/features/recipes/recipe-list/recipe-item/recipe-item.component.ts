import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import {Recipe} from "../../model/recipe.model";
import {RecipesService} from "../../services/recipes.service";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {

  @Input() item: Recipe;
  @Input() isActive: boolean;

  constructor(
    private recipesService: RecipesService
  ) {
  }

  onSelect(item: Recipe) {
    this.recipesService.selectedItemEvent.emit(item);
  }

}
