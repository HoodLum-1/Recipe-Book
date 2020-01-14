import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpRequest } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class DataStorageService {
    constructor(private http: HttpClient, 
                private recipeService: RecipeService) {}

    storeRecipes() {

        // return this.http.put('https://ng-recipe-book-2f9d4.firebaseio.com/recipes.json',
        //  this.recipeService.getRecipes(), {
        //   observe: 'body',
        //   params: new HttpParams().set('auth', token)
        // });
        const req = new HttpRequest('PUT', 'https://ng-recipe-book-2f9d4.firebaseio.com/recipes.json',
        this.recipeService.getRecipes(), {reportProgress: true,});
        return this.http.request(req);
    }

    getRecipes() {
    //  this.http.get<Recipe[]>('https://ng-recipe-book-2f9d4.firebaseio.com/recipes.json?auth=' + token).pipe(
     this.http.get<Recipe[]>('https://ng-recipe-book-2f9d4.firebaseio.com/recipes.json', {
       observe: 'body',
       responseType: 'json'
     }).pipe(
       map((recipes) => {
         console.log(recipes);
         for (let recipe of recipes) {
           if (!recipe['ingredients']) {
             recipe['ingredients'] = []; 
            }
          }
          return recipes;
        }
        )
        ).subscribe(
          (recipes: Recipe[]) => {
            this.recipeService.setRecipes(recipes);
          });
        }
      }