import { Controller, Get } from '@nestjs/common';
import { RecipesService } from './recipes.service';

@Controller('recipes')
export class RecipesController {
  constructor(private service: RecipesService) {}

  @Get()
  getRecipes() {
    return this.service.getRecipes();
  }
}
