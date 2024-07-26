import { AbstractRepository } from '@lib/core-lib';
import { Injectable, Logger } from '@nestjs/common';
import { Recipes } from './models/recipes.schema';
import { InjectModel, InjectConnection } from '@nestjs/mongoose';
import { Model, Connection } from 'mongoose';

@Injectable()
export class RecipeRepo extends AbstractRepository<Recipes> {
  protected readonly logger = new Logger(RecipeRepo.name);

  constructor(
    @InjectModel(Recipes.name) recipeModel: Model<Recipes>,
    @InjectConnection() connection: Connection,
  ) {
    super(recipeModel, connection);
  }
}
