import express from 'express';
import bcrypt from 'bcrypt';
import User from '../models/User.js';

const saltRound = 10;

const router = express.Router();

router.route('/signup')

  .post(async (req, res) => {
    const { name, email, password } = req.body;
    try {
      const user = new User({
        name,
        email,
        password: await bcrypt.hash(password, saltRound),
      });
      await user.save();
      req.session.user = user;
      res.json(user);
    } catch (error) {
      res.json(error.message);
    }
  });

router.route('/login')

  .post(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    try {
      if (user && (await bcrypt.compare(password, user.password))) {
        res.json(user);
      }
    } catch
    (error) {
      res.json(error.message);
    }
  });

router.route('/logout')

  .get(async (req, res) => {
    await req.session.destroy();
    res.clearCookie('auth');
    res.end();
  });

export default router;
