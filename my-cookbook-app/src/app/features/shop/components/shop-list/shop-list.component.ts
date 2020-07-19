import {Component, Input} from "@angular/core";
import {Ingredient} from "../../model/ingredient.model";

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent {

  @Input() items: Ingredient[] = [];

}
