import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';
import { map, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
    constructor(private http: HttpClient, private recipeService: RecipeService) { }

    storeRecipes() {
        const recipes = this.recipeService.getRecipes();
        this.http
            .put(
                'https://fair-alliance-354810-default-rtdb.asia-southeast1.firebasedatabase.app/recipes.json',
                recipes
            )
            .subscribe((res) => {
                console.log('res', res);
            });
    }

    fetchRecipes() {
        return this.http
            .get<Recipe[]>(
                'https://fair-alliance-354810-default-rtdb.asia-southeast1.firebasedatabase.app/recipes.json'
            )
            .pipe(
                map((recieps) => {
                    return recieps.map((recipe) => {
                        return {
                            ...recipe,
                            ingredients: recipe.ingredients ? recipe.ingredients : [],
                        };
                    });
                }),
                tap(recipes => {
                    this.recipeService.setRecipes(recipes);
                })
            )
    }
}
