import { Document } from '../../shared/document.model';

export interface WebApplication extends Document {
  applicationId: string;
  url: string;
}
