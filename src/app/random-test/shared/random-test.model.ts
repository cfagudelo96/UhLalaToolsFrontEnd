import { Document } from '../../shared/document.model';

export interface RandomTest extends Document {
  webApplication: string;
  timeToLive?: number;
  seed?: number;
  numRuns?: number;
  numGremlins?: number;
  generated?: boolean;
  executed?: boolean;
}
