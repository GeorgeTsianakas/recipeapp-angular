import {Component, ElementRef, Input, ViewChild} from "@angular/core";
import {Ingredient} from "../../model/ingredient.model";
import {IngredientsService} from "../../services/ingredients.service";

@Component({
  selector: 'app-shop-controls',
  templateUrl: './shop-controls.component.html',
  styleUrls: ['./shop-controls.component.css']
})
export class ShopControlsComponent {

  @Input() item: Ingredient;
  @ViewChild('idInput') idInput: ElementRef;
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;
  @ViewChild('unitInput') unitInput: ElementRef;

  constructor(
    private ingredientsService: IngredientsService
  ) {
  }

  private readIngredientForm(): Ingredient {
    return {
      name: this.nameInput.nativeElement.value,
      amount: +this.amountInput.nativeElement.value, // Cast to integer
      unit: this.unitInput.nativeElement.value
    };
  }

  private clearIngredientForm(): void {
    this.nameInput.nativeElement.value = null;
    this.amountInput.nativeElement.value = null;
    this.unitInput.nativeElement.value = null;
  }

  onSubmit(): void {
    const item: Ingredient = this.readIngredientForm();
    this.clearIngredientForm();
    if (this.item) {
      this.ingredientsService.updatedItemEvent.emit(item);
    } else {
      this.ingredientsService.createdItemEvent.emit(item);
    }
  }

  onDeselect(): void {
    this.ingredientsService.deselectedItemEvent.emit();
    this.clearIngredientForm();
  }

  onDelete(): void {
    const item: Ingredient = this.readIngredientForm();
    this.clearIngredientForm();
    this.ingredientsService.deletedItemEvent.emit(item);
  }

  onDeleteAll(): void {
    this.clearIngredientForm();
    this.ingredientsService.deletedAllItemsEvent.emit();
  }

}
