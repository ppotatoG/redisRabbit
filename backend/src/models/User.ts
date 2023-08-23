import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

const UserSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  nickname: { type: String, required: true },
  emailVerified: { type: Boolean, default: false },
});

UserSchema.pre('save', function (next) {
  const user = this as ISchemaUser;

  user.nickname = user.email.split('@')[0];

  if (!user.isModified('password')) {
    next();
    return;
  }

  bcrypt.hash(user.password, SALT_ROUNDS, (err, hashedPassword) => {
    if (err) {
      next(err);
      return;
    }

    user.password = hashedPassword;
    next();
  });
});

export default mongoose.model<ISchemaUser>('User', UserSchema);
