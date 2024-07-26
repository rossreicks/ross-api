import { Module } from '@nestjs/common';
import { RecipesController } from './recipes.controller';
import { RecipesService } from './recipes.service';
import { RecipeRepo } from './recipe.repository';
import { DatabaseModule } from '@lib/core-lib';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { Recipes, RecipesSchema } from './models/recipes.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
        PORT: Joi.number().required(),
      }),
      envFilePath: './apps/hello-fresh-api/.env',
    }),
    DatabaseModule,
    MongooseModule.forFeature([{ name: Recipes.name, schema: RecipesSchema }]),
  ],
  controllers: [RecipesController],
  providers: [RecipesService, RecipeRepo],
})
export class AppModule {}
