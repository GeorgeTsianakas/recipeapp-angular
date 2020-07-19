import {Component, Input} from "@angular/core";
import {Ingredient} from "../../../model/ingredient.model";
import {IngredientsService} from "../../../services/ingredients.service";

@Component({
  selector: 'app-shop-list-item',
  templateUrl: './shop-list-item.component.html',
  styleUrls: ['./shop-list-item.component.css']
})
export class ShopListItemComponent {

  @Input() item: Ingredient;

  constructor(
    private ingredientsService: IngredientsService
  ) {}

  onSelect(item: Ingredient): void {
    this.ingredientsService.selectedItemEvent.emit(item);
  }

}
