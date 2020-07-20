import {Component, OnDestroy, OnInit} from "@angular/core";
import {Subscription} from "rxjs";
import {ActivatedRoute, Data, Params} from "@angular/router";
import {Recipe} from "../recipe.model";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit, OnDestroy {

  id: number;
  recipe: Recipe;
  resolverSubscription: Subscription;
  paramsSubscription: Subscription;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.paramsSubscription = this.route.params.subscribe(
      (params: Params) => this.id = params.id
    );
    this.resolverSubscription = this.route.data.subscribe(
      (data: Data) => this.recipe = data.recipe
    );
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
    this.resolverSubscription.unsubscribe();
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

}
