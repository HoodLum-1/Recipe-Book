// import { Injectable } from '@angular/core';
// import { HttpClient, HttpParams, HttpRequest } from '@angular/common/http';
// import { RecipeService } from '../recipes/recipe.service';
// import { Recipe } from '../recipes/recipe.model';
// import { map, tap } from 'rxjs/operators';
// import { AuthService } from '../auth/auth.service';
// import { Subscription } from 'rxjs';

// @Injectable()
// export class DataStorageService {
//     constructor(private http: HttpClient, 
//                 private recipeService: RecipeService) {}

// storeRecipes() {
//   const token = this.authService.getToken();

//     return this.http.put('https://ng-recipe-book-2f9d4.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes());
// }

// getRecipes() {
//   const token = this.authService.getToken();
  
//   return this.http.get<Recipe[]>('https://ng-recipe-book-2f9d4.firebaseio.com/recipes.json?auth=' + token).pipe(
//     map(
//       (recipes) => {
//         console.log(recipes);
//       for (let recipe of recipes) {
//         if (!recipe['ingredients']) {
//           recipe['ingredients'] = [];
//         }
//       }
//       return recipes;
//     }
//   )
// ).subscribe(
//   (recipes: Recipe[]) => {
//     this.recipeService.setRecipes(recipes);
//   }
// );
// }
// }
