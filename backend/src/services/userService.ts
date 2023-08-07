import User from '../models/User';

export const createUserService = async (userData: ISchemaUser) => {
  const user = new User(userData);
  await user.save();
  return user;
};

export const findUsersService = async () => {
  return User.find({});
};

export const updateUserService = async (userId: string, updates: Partial<ISchemaUser>) => {
  const user = await User.findById(userId);
  if (!user) {
    return null;
  }

  const allowedUpdates = ['password', 'emailVerified'];
  for (const key in updates) {
    if (allowedUpdates.includes(key)) {
      user[key] = updates[key];
    }
  }

  await user.save();
  return user;
};

export const deleteUserService = async (userId: string) => {
  return User.findByIdAndDelete(userId);
};
