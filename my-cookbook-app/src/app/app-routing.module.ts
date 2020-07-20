import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RecipesComponent} from "./recipes/recipes.component";
import {RecipeDetailPlaceholderComponent} from "./recipes/recipe-detail-placeholder/recipe-detail-placeholder.component";
import {RecipeEditComponent} from "./recipes/recipe-edit/recipe-edit.component";
import {RecipeDetailComponent} from "./recipes/recipe-detail/recipe-detail.component";
import {RecipeResolverService} from "./recipes/recipe-resolver.service";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {ErrorPageComponent} from "./error-page/error-page.component";

const routes: Routes = [

  { // Recipes
    path: 'recipes',
    component: RecipesComponent,
    children: [
      { // No recipe selected
        path: '',
        pathMatch: 'full',
        component: RecipeDetailPlaceholderComponent
      },
      { // Create
        path: 'create',
        component: RecipeEditComponent
      },
      { // Select
        path: ':id',
        component: RecipeDetailComponent,
        resolve: {
          recipe: RecipeResolverService
        }
      },
      { // Edit
        path: ':id/edit',
        component: RecipeEditComponent,
        resolve: {
          recipe: RecipeResolverService
        }
      },
    ]
  },

  { // Shopping list
    path: 'shopping-list',
    component: ShoppingListComponent
  },

  { // Home
    path: '',
    pathMatch: 'full',
    redirectTo: 'recipes'
  },

  { // 404 error
    path: '404',
    component: ErrorPageComponent,
    data: {message: 'Sorry, page not found!'}
  },

  { // The rest
    path: '**',
    redirectTo: '404'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
