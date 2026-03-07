import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type ScoreDocument = HydratedDocument<Score>;

@Schema({ timestamps: true })
export class Score {
  @Prop({ type: Types.ObjectId, ref: 'Judge', required: true })
  judge!: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Candidate', required: true })
  candidate!: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Event', required: true })
  event!: Types.ObjectId;

  @Prop({ required: true })
  categoryName!: string; // store name directly, not ref

  @Prop({ required: true })
  value!: number;
}

export const ScoreSchema = SchemaFactory.createForClass(Score);

// Prevent a judge from scoring the same candidate+category twice
ScoreSchema.index(
  { judge: 1, candidate: 1, categoryName: 1 },
  { unique: true },
);
