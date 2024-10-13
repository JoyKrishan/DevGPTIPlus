const bcrypt = require("bcryptjs");
const { createJWT } = require("../util/jwt.js");
router.post('/', async (req, res, next) => {
// GET /users/me - retrieve logged in user
router.get('/me', async (req, res, next) => {
  try {
    // access user from request which has been
    // attached by the userVerification middleware
    const user = req.user;
    // if no user found, send back 404
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    // send back the user
    res.json(user);
  } catch (error) {
    // send back 500 and error message
    res.status(500).json({ message: error.message });
  }
});

router.get('/:email', async (req, res, next) => {

router.delete('/:email', async (req, res, next) => {