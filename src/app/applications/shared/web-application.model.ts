import { Document } from '../../shared/document.model';

export interface WebApplication extends Document {
  application: string;
  url: string;
  browserCapabilities?: any[];
}
