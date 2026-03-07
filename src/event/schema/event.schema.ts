import { HydratedDocument, Types } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type EventDocument = HydratedDocument<Event>;

export class Category {
  @Prop({ required: true })
  name!: string;

  @Prop({ required: true, min: 1, max: 100 })
  weight!: number; // percentage e.g. 30 = 30%

  @Prop({ required: true })
  maxScore!: number; // e.g. 10 or 100
}

export class ScoringConfig {
  @Prop({ required: true })
  minScore!: number;

  @Prop({ required: true })
  maxScore!: number;

  @Prop({ default: 2 })
  decimalPlaces!: number; // how many decimal places judges can enter
}

@Schema({ timestamps: true })
export class Event {
  @Prop({ required: true })
  name!: string;

  @Prop()
  description!: string;

  @Prop({ required: true })
  venue!: string;

  @Prop({ required: true })
  date!: Date;

  @Prop({ type: [Category], default: [] })
  categories!: Category[];

  @Prop({ type: ScoringConfig, required: true })
  scoringConfig!: ScoringConfig;

  @Prop({ default: false })
  isLocked!: boolean; // when true, no more score entries

  @Prop({ default: false })
  resultsPublished!: boolean;
}

export const EventSchema = SchemaFactory.createForClass(Event);
