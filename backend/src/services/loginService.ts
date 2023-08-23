import User from '@models/User';
import bcrypt from 'bcrypt';

interface ServiceResponse {
  success: boolean;
  message: string;
}

export const loginService = async (data: {
  email: string;
  password: string;
}): Promise<ServiceResponse> => {
  const { email, password } = data;
  try {
    const user: ISchemaUser | null = await User.findOne({ email });
    if (!user) {
      return { success: false, message: 'User not found' };
    }

    const isMatch: boolean = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return { success: false, message: 'Invalid password' };
    }

    // TODO: 성공 시 토큰 부여
    return { success: true, message: 'Logged in successfully' };
  } catch (error) {
    throw new Error('Server error');
  }
};
