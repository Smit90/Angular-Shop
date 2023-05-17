import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'A Test Recipe',
            'This is test desc',
            'https://media.istockphoto.com/id/1393615893/photo/artisan-hot-dogs-in-brioche-rolls-with-pickles-onion-and-relishes.jpg?s=2048x2048&w=is&k=20&c=RdZfrsGiRa8CJyE4fxRQQyT26FqNBCEfo0jaGB8RQg0=',
            [
                new Ingredient('Vegitables', 2),
                new Ingredient('Banana', 5)
            ]

        ),
        new Recipe(
            'Recipe 2',
            'This is test desc',
            'https://media.istockphoto.com/id/1393615893/photo/artisan-hot-dogs-in-brioche-rolls-with-pickles-onion-and-relishes.jpg?s=2048x2048&w=is&k=20&c=RdZfrsGiRa8CJyE4fxRQQyT26FqNBCEfo0jaGB8RQg0=',
            [
                new Ingredient('Apples', 2),
            ]
        ),
        new Recipe(
            'A Recipe 3',
            'This is test desc',
            'https://media.istockphoto.com/id/1393615893/photo/artisan-hot-dogs-in-brioche-rolls-with-pickles-onion-and-relishes.jpg?s=2048x2048&w=is&k=20&c=RdZfrsGiRa8CJyE4fxRQQyT26FqNBCEfo0jaGB8RQg0=',
            [
                new Ingredient('Orange', 2),
                new Ingredient('Watermelon', 7)
            ]
        ),
        new Recipe(
            '4th Recipe',
            'This is 4th desc',
            'https://media.istockphoto.com/id/1393615893/photo/artisan-hot-dogs-in-brioche-rolls-with-pickles-onion-and-relishes.jpg?s=2048x2048&w=is&k=20&c=RdZfrsGiRa8CJyE4fxRQQyT26FqNBCEfo0jaGB8RQg0=',
            [
                new Ingredient('Dragon Fruit', 1)
            ]
        ),
    ];

    constructor(private shoppingListService: ShoppingListService) { }

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients)
    }

}