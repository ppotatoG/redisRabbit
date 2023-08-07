import mongoose, { Schema } from 'mongoose';

const UserSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  nickname: { type: String, required: true },
  emailVerified: { type: Boolean, default: false },
});

UserSchema.pre('save', function (next) {
  const user = this as ISchemaUser;
  user.nickname = user.email.split('@')[0];
  next();
});

export default mongoose.model<ISchemaUser>('User', UserSchema);
