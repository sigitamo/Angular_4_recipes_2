import { Recipe } from '../recipe.model';
import { Ingredient }from '../../shared/ingredient.model';
import * as RecipeActions from './recipe.actions';
import * as fromApp from '../../store/app.reducers';

export interface FeatureState extends fromApp.AppState{
    recipes: State
}

export interface State {
    recipes: Recipe[];
 }
 
 const initialState: State = {
    recipes: [
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
      ]
 }

export function RecipeReducer(state = initialState, action: RecipeActions.RecipeActions) {
    switch(action.type) {
        case (RecipeActions.SET_RECIPES):
            return {
                ...state,
                recipes: [...action.payload]
            };
        case (RecipeActions.ADD_RECIPE):
            return {
                ...state,
                recipes: [...state.recipes, action.payload]
            };
        case (RecipeActions.UPDATE_RECIPE):
            const recipe = state.recipes[action.payload.index];
            const updatedRecipe = {
                ...recipe,
                ...action.payload.updatedRecipe
            };
            const recipes = [...state.recipes];
            recipes[action.payload.index] = updatedRecipe;
            return {
                ...state,
                recipes: recipes
            };
        case (RecipeActions.DELETE_RECIPE):
            const deletedRecipes = [...state.recipes];
            deletedRecipes.splice(action.payload, 1);
            return {
                ...state,
                recipes: deletedRecipes
                };
        default:
            return state;
    }
}