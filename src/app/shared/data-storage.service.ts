import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';
import { exhaustMap, map, take, tap } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService
  ) {}

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
        tap((recipes) => {
          this.recipeService.setRecipes(recipes);
        })
      );
  }

  // fetchRecipes() {
  //     return this.authService.user.pipe(
  //         take(1),
  //         exhaustMap((user) => {
  //             return this.http.get<Recipe[]>(
  //                 'https://fair-alliance-354810-default-rtdb.asia-southeast1.firebasedatabase.app/recipes.json',
  //                 {
  //                     params: new HttpParams().set('auth', user?.token || '')
  //                 }
  //             );
  //         }),
  //         map((recieps) => {
  //             return recieps.map((recipe) => {
  //                 return {
  //                     ...recipe,
  //                     ingredients: recipe.ingredients ? recipe.ingredients : [],
  //                 };
  //             });
  //         }),
  //         tap((recipes) => {
  //             this.recipeService.setRecipes(recipes);
  //         })
  //     );
  // }
}
