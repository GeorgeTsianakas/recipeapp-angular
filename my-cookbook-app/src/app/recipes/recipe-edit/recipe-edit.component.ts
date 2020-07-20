import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";
import {Recipe} from "../recipe.model";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html'
})
export class RecipeEditComponent implements OnInit {

  recipe: Recipe;
  action = 'create';

  constructor(
    private route: ActivatedRoute,
    private recipesService: RecipeService
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        if (params.id) { // Editing...
          this.action = 'edit';
          const id = +params.id;
          this.recipe = this.recipesService.getRecipe(id);
        } else { // Creating...
          this.action = 'create';
        }
      }
    );
  }

}
