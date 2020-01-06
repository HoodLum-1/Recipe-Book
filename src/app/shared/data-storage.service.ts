import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { map, tap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {
    constructor(private http: HttpClient, private recipeService: RecipeService,
      private authService: AuthService) {}

    storeRecipes() {
        return this.http.put('https://ng-recipe-book-2f9d4.firebaseio.com/recipes.json', this.recipeService.getRecipes());
    }

    getRecipes() {
     const token = this.authService.getToken()
     
        return this.http.get<Recipe[]>('https://ng-recipe-book-2f9d4.firebaseio.com/recipes.json?auth=' + token).pipe(
            map((response: Recipe[]) => {
              for (let recipe of response) {
                if (!recipe['ingredients']) {
                  recipe['ingredients'] = [];
                }
               }
               return response;
              }
            ),
            tap((recipes: Recipe[]) => {
                this.recipeService.setRecipes(recipes);
            })
          );


        // .pipe(
        //     map(
        //         (response: Response) => {
        //             const recipes: Recipe[] = response.json();
        //             for (let recipe of recipes) {
        //                 if (!recipe['ingredients']) {
        //                     recipe['ingredients']= [];
        //                 }
        //             }
        //             return recipes
        //         }
        //     )
        // )
        // .subscribe(
        //     (recipes: Response) => {
        //         this.recipeService.setRecipes(recipes);
        //     }
        // );
    }
}