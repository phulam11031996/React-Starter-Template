import { Request, Response } from 'express';
import { deleteService, getIdService, getService, postService, putService } from '../models/accountService';
import { CREATE_201, INTERNAL_ERROR_500, NOT_FOUND_404, NO_CONTENT_204, OK_200 } from '../../common/httpCode';

interface Account {
  _id: string;
  email: string;
  password: string;
}

export const postController = async (req: Request, res: Response) => {
  await postService(req.body)
    .then((result: Account) => {
      res.status(CREATE_201).json(result);
    })
    .catch(() => {
      res.status(INTERNAL_ERROR_500).json({ message: 'Internal Server Error' });
    });
};

export const getController = async (req: Request, res: Response) => {
  await getService()
    .then((result: Array<Account>) => {
      res.status(OK_200).json(result);
    })
    .catch(() => {
      res.status(INTERNAL_ERROR_500).json({ message: 'Internal Server Error' });
    });
};

export const getIdController = async (req: Request, res: Response) => {
  await getIdService(req.params.id)
    .then((result) => {
      result && res.status(OK_200).json(result);
      !result && res.status(NOT_FOUND_404).json();
    })
    .catch(() => {
      res.status(INTERNAL_ERROR_500).json({ message: 'Internal Server Error' });
    });
};

export const deleteController = async (req: Request, res: Response) => {
  await deleteService(req.params.id)
    .then(() => res.status(NO_CONTENT_204).json())
    .catch(() => {
      res.status(INTERNAL_ERROR_500).json({ message: 'Internal Server Error' });
    });
};

export const putController = async (req: Request, res: Response) => {
  await putService(req.params.id, req.body)
    .then((result) => {
      result && res.status(OK_200).json(result);
      !result && res.status(NOT_FOUND_404).json();
    })
    .catch(() => {
      res.status(INTERNAL_ERROR_500).json({ message: 'Internal Server Error' });
    });
};
