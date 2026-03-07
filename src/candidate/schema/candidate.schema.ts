// src/candidate/schemas/candidate.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type CandidateDocument = HydratedDocument<Candidate>;

@Schema({ timestamps: true })
export class Candidate {
  @Prop({ required: true })
  number!: number; // candidate number

  @Prop({ required: true })
  name!: string;

  @Prop()
  age!: number;

  @Prop()
  course!: string;

  @Prop({ required: false })
  photoUrl!: string;

  @Prop({ type: Types.ObjectId, ref: 'Event', required: true })
  event!: Types.ObjectId;
}

export const CandidateSchema = SchemaFactory.createForClass(Candidate);
