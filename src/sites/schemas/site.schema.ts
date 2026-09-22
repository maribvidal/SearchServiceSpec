import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { User } from '../../users/schemas/user.schema';

@Schema()
export class Site extends Document {
  @Prop()
  nombre: string;

  @Prop()
  url: string;

  @Prop()
  depthLevel: number;

  @Prop()
  searchFrequency: number;

  @Prop()
  documentExtractor: string;

  // Este atributo es opcional
  @Prop({ required: false })
  pageResolver?: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  userId: User; 
}

export const SiteSchema = SchemaFactory.createForClass(Site);