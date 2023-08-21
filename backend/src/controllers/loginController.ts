import { Request, Response } from 'express';
import { loginService } from '@services/loginService';

export const login = async (req: Request, res: Response) => {
  try {
    const result = await loginService(req.body);

    if (result.success) {
      return res.status(200).send(result.message);
    } else {
      return res.status(401).send(result.message);
    }
  } catch (error) {
    res.status(500).send({ success: false, message: 'Server error' });
  }
};
