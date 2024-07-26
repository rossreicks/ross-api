import { Injectable } from '@nestjs/common';
import { RecipeRepo } from './recipe.repository';

@Injectable()
export class RecipesService {
  constructor(private repo: RecipeRepo) {}

  getRecipes() {
    return this.repo.find({}).limit(10);
  }
}
