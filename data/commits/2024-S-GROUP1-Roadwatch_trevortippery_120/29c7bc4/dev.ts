import * as notificationController from '../controllers/NotificationController';
import { validateToken } from '../middlewares';
router.post(
  '/save-subscription',
  validateToken,
  notificationController.saveSubscription
router.put('/unsubscribe', validateToken, notificationController.unsubscribe);
router.post(
  '/send-notification',
  validateToken,
  notificationController.sendNotification
);