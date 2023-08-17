import * as express from 'express';

import {
  deleteController,
  getController,
  getIdController,
  postController,
  putController,
} from '../controllers/accountController';

const router = express.Router();

router.route('/api/accounts').get(getController);
router.route('/api/accounts/:id').get(getIdController);
router.route('/api/accounts').post(postController);
router.route('/api/accounts/:id').delete(deleteController);
router.route('/api/accounts/:id').put(putController);

export default router;
