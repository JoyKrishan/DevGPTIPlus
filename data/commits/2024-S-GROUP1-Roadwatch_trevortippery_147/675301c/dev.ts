import express from 'express';
import { validateToken } from '../middlewares';
import * as postController from '../controllers/PostControllers';

const router = express.Router();

// define routes
router.get('/:postId', validateToken, postController.getPost);

router.get('/:postId/replies', validateToken, postController.getReplies);

router.post('/:postId/replies', validateToken, postController.addReply);

router.delete('/:postId/replies/:replyId', validateToken, postController.deleteReply);

router.post('/', validateToken, postController.createPost);


export default router;