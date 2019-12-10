import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()

export class RecipeService {

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

      constructor(private slService: ShoppingListService){

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
}