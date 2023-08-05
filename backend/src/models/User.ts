import mongoose, { Schema, Document } from 'mongoose';

interface IUser extends Document {
  email: string;
  password: string;
  nickname: string;
  emailVerified: boolean;
}

const UserSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  nickname: { type: String, required: true },
  emailVerified: { type: Boolean, default: false },
});

UserSchema.pre('save', function (next) {
  const user = this as IUser;
  user.nickname = user.email.split('@')[0];
  next();
});

export default mongoose.model<IUser>('User', UserSchema);
