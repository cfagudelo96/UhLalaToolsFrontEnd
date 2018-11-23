import { Document } from '../../shared/document.model';

export interface RandomTestError extends Document {
  randomTest: string;
  error: string;
}
