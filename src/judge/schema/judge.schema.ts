import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type JudgeDocument = HydratedDocument<Judge>;

@Schema()
export class Judge {
  @Prop({ required: true, unique: true })
  username!: string;

  @Prop({ required: true })
  password!: string;

  @Prop({ type: Types.ObjectId, ref: 'Event', required: true })
  event!: string;

  @Prop({ default: true })
  siActive!: boolean;
}

export const JudgeSchema = SchemaFactory.createForClass(Judge);
