import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import * as shoppingListActions from '../shopping-list/store/shopping-list.action'
import * as fromShoppingList from '../shopping-list/store/shopping-list.reducer';

@Injectable()
export class RecipeService {
    recipeChanged = new Subject<Recipe[]>();
    private recipes: Recipe[] = [];
    // private recipes: Recipe[] = [
    //     new Recipe(
    //         'A Test Recipe',
    //         'This is test desc',
    //         'https://media.istockphoto.com/id/1393615893/photo/artisan-hot-dogs-in-brioche-rolls-with-pickles-onion-and-relishes.jpg?s=2048x2048&w=is&k=20&c=RdZfrsGiRa8CJyE4fxRQQyT26FqNBCEfo0jaGB8RQg0=',
    //         [
    //             new Ingredient('Vegitables', 2),
    //             new Ingredient('Banana', 5)
    //         ]

    //     ),
    //     new Recipe(
    //         'Recipe 2',
    //         'This is test desc',
    //         'https://media.istockphoto.com/id/1393615893/photo/artisan-hot-dogs-in-brioche-rolls-with-pickles-onion-and-relishes.jpg?s=2048x2048&w=is&k=20&c=RdZfrsGiRa8CJyE4fxRQQyT26FqNBCEfo0jaGB8RQg0=',
    //         [
    //             new Ingredient('Apples', 2),
    //         ]
    //     ),
    //     // new Recipe(
    //     //     'A Recipe 3',
    //     //     'This is test desc',
    //     //     'https://media.istockphoto.com/id/1393615893/photo/artisan-hot-dogs-in-brioche-rolls-with-pickles-onion-and-relishes.jpg?s=2048x2048&w=is&k=20&c=RdZfrsGiRa8CJyE4fxRQQyT26FqNBCEfo0jaGB8RQg0=',
    //     //     [
    //     //         new Ingredient('Orange', 2),
    //     //         new Ingredient('Watermelon', 7)
    //     //     ]
    //     // ),
    //     // new Recipe(
    //     //     '4th Recipe',
    //     //     'This is 4th desc',
    //     //     'https://media.istockphoto.com/id/1393615893/photo/artisan-hot-dogs-in-brioche-rolls-with-pickles-onion-and-relishes.jpg?s=2048x2048&w=is&k=20&c=RdZfrsGiRa8CJyE4fxRQQyT26FqNBCEfo0jaGB8RQg0=',
    //     //     [
    //     //         new Ingredient('Dragon Fruit', 1)
    //     //     ]
    //     // ),
    // ];

    constructor(private shoppingListService: ShoppingListService, private store: Store<fromShoppingList.AppState>) { }

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipeChanged.next(this.recipes.slice());
    }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientToShoppingList(ingredients: Ingredient[]) {
        this.store.dispatch(new shoppingListActions.AddIngredients(ingredients))
        // this.shoppingListService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipeChanged.next(this.recipes.slice());
    }
    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipeChanged.next(this.recipes.slice());
    }
}
