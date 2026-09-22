import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop()
  name: string;

  @Prop()
  email: string;

  // Luego lo tengo que volver un hash.
  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);