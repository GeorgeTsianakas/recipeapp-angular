import {Component, OnInit} from '@angular/core';
import {Ingredient} from "./model/ingredient.model";
import {IngredientsService} from "./services/ingredients.service";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  items: Ingredient[];
  selectedItem: Ingredient;

  constructor(
    private ingredientsService: IngredientsService
  ) {
  }

  ngOnInit(): void {

    // Initialize data
    this.items = this.ingredientsService.get();

    // Updating data...
    this.ingredientsService.itemsUpdatedEvent.subscribe(
      (items: Ingredient[]) => {
        this.items = items;
      }
    );

    // Error...
    this.ingredientsService.errorEvent.subscribe((message: string) => {
      console.log(message);
    });

    // Selecting an item...
    this.ingredientsService.selectedItemEvent.subscribe((item: Ingredient) => {
      this.selectedItem = item;
    });

    // Deselecting an item...
    this.ingredientsService.deselectedItemEvent.subscribe(() => {
      this.selectedItem = null;
    });

    // Creating a new item...
    this.ingredientsService.createdItemEvent.subscribe((item: Ingredient) => {
      this.ingredientsService.add(item);
    });

    // Updating an item...
    this.ingredientsService.updatedItemEvent.subscribe((item: Ingredient) => {
      this.ingredientsService.update(item);
    });

    // Deleting an item...
    this.ingredientsService.deletedItemEvent.subscribe((item: Ingredient) => {
      this.ingredientsService.delete(item);
    });

    // Deleting all items...
    this.ingredientsService.deletedAllItemsEvent.subscribe(() => {
      this.ingredientsService.deleteAll();
    });

  }

}
