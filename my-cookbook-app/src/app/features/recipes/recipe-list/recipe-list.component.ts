import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import {Recipe} from "../model/recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  @Input() items: Recipe[];
  @Input() current: Recipe;

}
