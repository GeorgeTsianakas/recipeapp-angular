import {Component, OnInit} from "@angular/core";
import {Recipe} from "./model/recipe.model";
import {RecipesService} from "./services/recipes.service";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  items: Recipe[];
  selectedItem: Recipe;

  constructor(
    private recipesService: RecipesService
  ) {
  }

  ngOnInit() {

    this.testInit();

    this.items = this.recipesService.get();

    // Error...
    this.recipesService.errorEvent.subscribe((message: string) => {
      console.log(message);
    });

    // Updating data...
    this.recipesService.itemsUpdatedEvent.subscribe(
      (items: Recipe[]) => {
        this.items = items;
      }
    );

    // Selecting...
    this.recipesService.selectedItemEvent.subscribe((item: Recipe) => {
      this.selectedItem = item;
    });

    // Deselecting...
    this.recipesService.deselectedItemEvent.subscribe(() => {
      this.selectedItem = null;
    });

  }

  testInit(): void {

    const data = [
      {
        name: 'Test recipe #1',
        description: 'This is simply a test #1',
        imagePath: 'Google an image',
        ingredients: [
          {name: 'ingr1', amount: 2},
          {name: 'ingr2', amount: 25},
        ]
      },
      {
        name: 'Test recipe #2',
        description: 'This is simply a test #2',
        imagePath: 'Google an image',
        ingredients: [
          {name: 'ingr1', amount: 2},
          {name: 'ingr2', amount: 3},
        ]
      }
    ];

    this.recipesService
      .deleteAll()
      .add(data[0])
      .add(data[1]);
  }

}
