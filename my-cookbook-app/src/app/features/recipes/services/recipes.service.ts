import {Injectable} from "@angular/core";
import {Recipe} from "../model/recipe.model";
import {EventEmitter} from "events";
import {Ingredient} from "../../shop/model/ingredient.model";
import {IngredientsService} from "../../shop/services/ingredients.service";

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private items: Recipe[] = [];
  public itemsUpdatedEvent = new EventEmitter<Recipe[]>();
  public selectedItemEvent = new EventEmitter<Recipe>();
  public deselectedItemEvent = new EventEmitter<void>();
  public errorEvent = new EventEmitter<string>();

  constructor(
    private ingredientsService: IngredientsService
  ) {}

  add(input: Recipe): RecipesService {

    const existing = this.items.find(item => item.name === input.name);

    if (existing) {
      this.errorEvent.emit(`Recipe "${input.name}" already exists.`);
    } else {
      this.items.push(input);
      this.itemsUpdatedEvent.emit(this.items.slice());
    }

    return this;
  }

  addIngredients(ingredients: Ingredient[]): RecipesService {
    this.ingredientsService.addMultiple(ingredients);
    return this;
  }

  get(filterFunction?: (item: Recipe) => boolean): Recipe[] {
    if (filterFunction) {
      return this.items.filter(filterFunction);
    }
    return this.items.slice(); // Copy
  }

  update(input: Recipe): RecipesService {
    this.itemsUpdatedEvent.emit(
      this.items
        .map(item => item.name === input.name ? input : name)
    );
    return this;
  }

  delete(input: Recipe): RecipesService {
    this.itemsUpdatedEvent.emit(
      this.items
        .filter(item => item.name !== input.name)
    );
    return this;
  }

  deleteAll(): RecipesService {
    this.itemsUpdatedEvent.emit([]);
    return this;
  }

}
