import { Document } from 'mongoose';

declare global {
  interface ISchemaUser extends Document {
    email: string;
    password: string;
    nickname: string;
    emailVerified: boolean;
  }
}
