import express from 'express';
import User from '../models/User.js';
import Advices from '../models/Advices.js';

const router = express.Router();

router.route('/')

  .post(async (req, res) => {
    const { id, periodStart, ovulationDay } = req.body;

    const user = await User.findById(id);
    user.periodStart.push(periodStart);
    user.periodStart.sort((a, b) => (new Date(a[0]) - new Date(b[0])));
    user.ovulationDay.push(ovulationDay);
    user.ovulationDay.sort((a, b) => (new Date(a) - new Date(b)));

    await user.save();
    res.status(200).end();
  });

router.post('/:id', async (req, res) => {
  const { id } = req.params;
  const { email } = req.body;

  const user = await User.findById(id);
  user.partnerContact = email;
  await user.save();
  res.status(200).end();
});

router.post('/goal/:id', async (req, res) => {
  const { id } = req.params;
  const { toGetPregnant } = req.body;
  const user = await User.findById(id);
  user.toGetPregnant = toGetPregnant;
  await user.save();
  res.status(200).end();
});

router.get('/init/:id', async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  const advices = await Advices.find();
  let defaultAdvice;
  const day = new Date().setHours(0o0, 0o0, 0o0, 0o0);
  if (user.periodStart.length === 0) {
    defaultAdvice = 'Be carefull with yourself';
  } else {
    let firstDay = user.periodStart[user.periodStart.length - 1][0];
    firstDay = new Date(firstDay);
    const diferent = Math.round((day - firstDay) / 86400000);
    if (diferent > 28) {
      defaultAdvice = 'Be carefull with yourself';
    } else {
      advices.forEach((advice) => {
        if (advice.name === diferent) {
          defaultAdvice = advice.text;
        }
      });
    }
  }

  res.json({
    periodStart: user.periodStart, ovulationDay: user.ovulationDay, advices: defaultAdvice,
  });
});

export default router;
