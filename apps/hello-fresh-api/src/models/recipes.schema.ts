import { AbstractDocument } from '@lib/core-lib';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({ collection: 'recipes' })
export class Recipes extends AbstractDocument {
  @Prop()
  name: string;
}

export const RecipesSchema = SchemaFactory.createForClass(Recipes);
