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

    const user = await User.findByIdAndUpdate({ _id: id }, {
      periodStart,
      ovulationDay: addDays(periodStart),
    });
    await user.save();
    res.json(user);
  });

router.post('/:id', async (req, res) => {
  const { id } = req.params;
  const { email } = req.body;

  const user = await User.findById({ _id: id }, {
    partnerContact: email,
  });
  await user.save();
  console.log('ok');
  res.send(200);
});

export default router;
