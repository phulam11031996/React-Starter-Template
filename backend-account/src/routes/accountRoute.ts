import * as express from 'express';

import { postController } from '../controllers/accountController';

const router = express.Router();

router.route('/accounts').post(postController);

export default router;
