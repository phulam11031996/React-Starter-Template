import { Request, Response } from 'express';
import { postService } from '../models/accountService';

interface Account {
  _id: string;
  Email: string;
  Password: string;
  Phone: string;
}

export const postController = async (req: Request, res: Response) => {
  await postService(req.body)
    .then((result: Account) => {
      res.status(200).json(result)
    })
    .catch(() => {
      res.status(500).json({ message: "Internal Server Error" })
    });
};
