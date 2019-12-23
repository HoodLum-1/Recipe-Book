import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()

export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe(
            'Pizaa',
            'A tasty Pizza - Amazing',
            'https://www.publicdomainpictures.net/pictures/40000/velka/italian-pizza.jpg',
            [
                new Ingredient('Cheese', 2),
                new Ingredient('Dough',1),
                new Ingredient('Toppings',10)
            ]),
        new Recipe(
            'Big Fat Burger',
            'What more do you need?',
            'https://upload.wikimedia.org/wikipedia/commons/9/9a/Big_Mac_hamburger.jpg',
            [
                new Ingredient('Buns',2),
                new Ingredient('Meat',2)
            ])
      ];

      constructor(private slService: ShoppingListService){}

      setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
      }

      getRecipes() {
          return this.recipes.slice(); //get a copy of recipes array
      }

      getRecipe(index: number) {
        return this.recipes[index];
      }

      addIngredientsToSL(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
      }

      addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
      }

      updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
      }

      deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
      }
}