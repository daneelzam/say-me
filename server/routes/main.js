import express from 'express';
import User from '../models/User.js';

const router = express.Router();

function addDays(periodStart, days = 10) {
  const startDay = new Date(periodStart);
  startDay.setDate(startDay.getDate() + days);
  return startDay;
}

router.route('/')

  .post(async (req, res) => {
    const { id, periodStart } = req.body;

    const user = await User.findByIdAndUpdate(id, {
      periodStart,
      // ovulationDay: addDays(periodStart),
    });
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
  res.json({ periodStart: user.periodStart, ovulationDay: user.ovulationDay });
});

export default router;
