import {Component} from "@angular/core";
import {Ingredient} from "../../shared/model/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html'
})
export class ShoppingEditComponent {

  constructor(
    private slService: ShoppingListService
  ) {
  }

  onAddItem(form: NgForm) {
    const data = form.value;
    const ingredient = new Ingredient(data.name, data.amount);
    this.slService.addIngredient(ingredient);
  }

}
