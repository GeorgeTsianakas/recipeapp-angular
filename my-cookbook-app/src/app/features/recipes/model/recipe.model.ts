import {Ingredient} from "../../shop/model/ingredient.model";

export interface Recipe {

  name: string;
  description: string;
  imagePath: string;
  ingredients: Ingredient[];

}
