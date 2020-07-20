import {Component, Input, OnDestroy, OnInit} from "@angular/core";
import {Recipe} from "../recipe.model";
import {Subscription} from "rxjs";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit, OnDestroy {

  items: Recipe[];
  itemsSub: Subscription;

  constructor(
    private recipesService: RecipeService
  ) {
  }

  ngOnInit(): void {

    this.items = this.recipesService.getRecipes();

    this.itemsSub = this.recipesService.recipesChanged.subscribe(
      (recipes: Recipe[]) => {
        this.items = recipes;
      }
    );

  }

  ngOnDestroy(): void {
    this.itemsSub.unsubscribe();
  }

}
