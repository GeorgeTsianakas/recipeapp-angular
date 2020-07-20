import {Component, OnInit} from "@angular/core";
import {RecipeService} from "./recipe.service";
import {Recipe} from "./recipe.model";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  providers: [RecipeService]
})

export class RecipesComponent implements OnInit {

  items: Recipe[];

  constructor(
    private recipeService: RecipeService
  ) {
  }

  ngOnInit() {
    this.items = this.recipeService.getRecipes();
  }

}
