import { Subject } from 'rxjs/Subject';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Hamburger', 
      'The best one on Lithuanian country. Taste it!!', 
      'http://assets.epicurious.com/photos/57c5c6d9cf9e9ad43de2d96e/master/pass/the-ultimate-hamburger.jpg',
      [
        new Ingredient('bread', 4),
        new Ingredient('meat', 2),
        new Ingredient ('souce', 2)
      ]),
    new Recipe(
      'A Salad', 
      'fresh, tasty, green!!!', 
      'http://www.simplyrecipes.com/wp-content/uploads/2016/07/2016-08-12-BLT-Salad-3-600x400.jpg',
      [
        new Ingredient('salad', 1),
        new Ingredient('tomato', 2),
        new Ingredient('cucumber', 1),
        new Ingredient('oil', 1)
      ])
  ]; 
  
  constructor() {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
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
