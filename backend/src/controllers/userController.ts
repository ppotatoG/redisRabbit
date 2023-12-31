import { Request, Response } from 'express';
import {
  createUserService,
  deleteUserService,
  findUsersService,
  updateUserService,
} from '@services/userService';

export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await createUserService(req.body);
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const readUsers = async (req: Request, res: Response) => {
  try {
    const users = await findUsersService();
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const user = await updateUserService(req.params.id, req.body);
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (error) {
    if (error.message === 'Invalid updates!') {
      return res.status(400).send({ error: error.message });
    }
    res.status(400).send(error);
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const user = await deleteUserService(req.params.id);

    if (!user) {
      return res.status(404).send();
    }

    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};
