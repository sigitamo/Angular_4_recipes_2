import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRecipeReducers from '../store/recipe.reducers';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipeState: Observable<fromRecipeReducers.State>;
  

  constructor(
            private router: Router,
            private route: ActivatedRoute,
            private store: Store<fromRecipeReducers.FeatureState>) { 
  }

  ngOnInit() {
    this.recipeState = this.store.select('recipes')
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  
  
}
