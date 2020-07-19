import {Ingredient} from "../model/ingredient.model";
import {EventEmitter} from "events";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {

  private items: Ingredient[] = [];

  public itemsUpdatedEvent = new EventEmitter<Ingredient[]>();
  public createdItemEvent = new EventEmitter<Ingredient>();
  public updatedItemEvent = new EventEmitter<Ingredient>();
  public deletedItemEvent = new EventEmitter<Ingredient>();
  public deletedAllItemsEvent = new EventEmitter<void>();
  public selectedItemEvent = new EventEmitter<Ingredient>();
  public deselectedItemEvent = new EventEmitter<void>();
  public errorEvent = new EventEmitter<string>();

  add(input: Ingredient): IngredientsService {

    const existing = this.items.find(item => item.name === input.name);

    if (existing) {
      this.errorEvent.emit(`Ingredient "${input.name}" already exists.`);
    } else {
      this.items.push(input);
      this.itemsUpdatedEvent.emit(this.items.slice());
    }

    return this;
  }

  addMultiple(items: Ingredient[]): IngredientsService {
    this.items.push(...items);
    this.itemsUpdatedEvent.emit(this.items.slice());
    return this;
  }

  get(filterFunction?: (item: Ingredient) => boolean): Ingredient[] {
    if (filterFunction) {
      return this.items.filter(filterFunction);
    }
    return this.items.slice(); // Copy
  }

  update(input: Ingredient): IngredientsService {
    this.itemsUpdatedEvent.emit(
      this.items
        .map(item => item.name === input.name ? input : name)
    );
    return this;
  }

  delete(input: Ingredient): IngredientsService {
    this.itemsUpdatedEvent.emit(
      this.items
        .filter(item => item.name !== input.name)
    );
    return this;
  }

  deleteAll(): IngredientsService {
    this.itemsUpdatedEvent.emit([]);
    return this;
  }

}
