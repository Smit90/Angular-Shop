import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is test desc',
      'https://media.istockphoto.com/id/1393615893/photo/artisan-hot-dogs-in-brioche-rolls-with-pickles-onion-and-relishes.jpg?s=2048x2048&w=is&k=20&c=RdZfrsGiRa8CJyE4fxRQQyT26FqNBCEfo0jaGB8RQg0='
    ),
    new Recipe(
      'A Test Recipe',
      'This is test desc',
      'https://media.istockphoto.com/id/1393615893/photo/artisan-hot-dogs-in-brioche-rolls-with-pickles-onion-and-relishes.jpg?s=2048x2048&w=is&k=20&c=RdZfrsGiRa8CJyE4fxRQQyT26FqNBCEfo0jaGB8RQg0='
    ),
    new Recipe(
      'A Test Recipe',
      'This is test desc',
      'https://media.istockphoto.com/id/1393615893/photo/artisan-hot-dogs-in-brioche-rolls-with-pickles-onion-and-relishes.jpg?s=2048x2048&w=is&k=20&c=RdZfrsGiRa8CJyE4fxRQQyT26FqNBCEfo0jaGB8RQg0='
    ),
  ];

  constructor() {}

  ngOnInit() {}
}
