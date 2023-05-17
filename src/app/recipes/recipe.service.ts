import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'A Test Recipe',
            'This is test desc',
            'https://media.istockphoto.com/id/1393615893/photo/artisan-hot-dogs-in-brioche-rolls-with-pickles-onion-and-relishes.jpg?s=2048x2048&w=is&k=20&c=RdZfrsGiRa8CJyE4fxRQQyT26FqNBCEfo0jaGB8RQg0='
        ),
        new Recipe(
            'Recipe 2',
            'This is test desc',
            'https://media.istockphoto.com/id/1393615893/photo/artisan-hot-dogs-in-brioche-rolls-with-pickles-onion-and-relishes.jpg?s=2048x2048&w=is&k=20&c=RdZfrsGiRa8CJyE4fxRQQyT26FqNBCEfo0jaGB8RQg0='
        ),
        new Recipe(
            'A Recipe 3',
            'This is test desc',
            'https://media.istockphoto.com/id/1393615893/photo/artisan-hot-dogs-in-brioche-rolls-with-pickles-onion-and-relishes.jpg?s=2048x2048&w=is&k=20&c=RdZfrsGiRa8CJyE4fxRQQyT26FqNBCEfo0jaGB8RQg0='
        ),
        new Recipe(
            '4th Recipe',
            'This is 4th desc',
            'https://media.istockphoto.com/id/1393615893/photo/artisan-hot-dogs-in-brioche-rolls-with-pickles-onion-and-relishes.jpg?s=2048x2048&w=is&k=20&c=RdZfrsGiRa8CJyE4fxRQQyT26FqNBCEfo0jaGB8RQg0='
        ),
    ];

    getRecipes() {
        return this.recipes.slice();
    }

}