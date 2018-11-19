import { Document } from '../../shared/document.model';

export interface Application extends Document {
  name: string;
  description?: string;
}
