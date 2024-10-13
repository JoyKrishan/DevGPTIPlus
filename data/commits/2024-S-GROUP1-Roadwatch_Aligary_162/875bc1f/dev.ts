router.put('/profile/:id', validateToken, userController.updateUserProfile);

router.put('/security/update-password/:id', validateToken, userController.updatePassword);
