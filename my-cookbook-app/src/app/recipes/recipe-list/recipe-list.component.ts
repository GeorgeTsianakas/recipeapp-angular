import {Component, Input} from "@angular/core";
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent {

  @Input() items: Recipe[];

}
