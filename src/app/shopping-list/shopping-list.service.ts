// import { Ingredient } from '../shared/ingredient.model';
// import { Subject } from 'rxjs';

// export class ShoppingListService {
//     ingredientsChanged = new Subject<Ingredient[]>();
//     startedEditing = new Subject<number>();
//     private ingredients: Ingredient[] = [
//         new Ingredient('Apples', 5),
//         new Ingredient('Oranges', 10)
        
//       ];

//       getIngredient(index: number) {
//         return this.ingredients[index];
//       }

//       updateIngredient(index, newIngredient: Ingredient) {
//         this.ingredients[index] = newIngredient;
//         this.ingredientsChanged.next(this.ingredients.slice());
//       }

//       deleteIngedient(index: number) {
//         this.ingredients.splice(index, 1);
//         this.ingredientsChanged.next(this.ingredients.slice());
//       }
// }