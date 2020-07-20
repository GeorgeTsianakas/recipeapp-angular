import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {Recipe} from "./recipe.model";
import {RecipeService} from "./recipe.service";

@Injectable({
  providedIn: 'root'
})
export class RecipeResolverService implements Resolve<Recipe> {

  constructor(
    private recipesService: RecipeService
  ) {
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Recipe> | Promise<Recipe> | Recipe {
    const id = +route.params.id;
    const recipe = this.recipesService.getRecipe(id);
    // todo // Put any "recipe not found" logic here!
    return recipe;
  }

}
