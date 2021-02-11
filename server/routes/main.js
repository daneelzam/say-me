import express from 'express';
import User from '../models/User.js';
import Advices from '../models/Advices.js';

const router = express.Router();

function addDays(periodStart, days = 10) {
  const startDay = new Date(periodStart);
  startDay.setDate(startDay.getDate() + days);
  return startDay;
}

router.route('/')

  .post(async (req, res) => {
    const { id, periodStart, ovulationDay } = req.body;

    const user = await User.findById(id);
    user.periodStart.push(periodStart);
    user.ovulationDay.push(ovulationDay);

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
  // const defaultAdvice = 'Be carefull with yourself';
  // const day = new Date();
  // const dayOfMonth = day.getDate();
  // if ((user.periodStart.length - 1) < 1) {
  //   return defaultAdvice;
  // } else {
  //     const firstDay = user.periodStart[user.periodStart.length - 1][0];
  //     for (let i = 0; i < 28; i++)
  //
  //         }

  res.json({
    periodStart: user.periodStart, ovulationDay: user.ovulationDay, advices: advices[1].text,
  });
});

export default router;
