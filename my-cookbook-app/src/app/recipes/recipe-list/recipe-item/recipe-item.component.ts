import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import {Recipe} from "../../recipe.model";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {

  @Input() item: Recipe;
  @Input() isActive: boolean;
  @Output() select = new EventEmitter<Recipe>();


  onClick(recipe: Recipe) {
    this.select.emit(recipe);
  }

}
