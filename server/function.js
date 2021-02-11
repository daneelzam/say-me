import mongoose from 'mongoose';
import sgMail from '@sendgrid/mail';
import User from './models/User.js';
import Message from './models/Message.js';

sgMail.setApiKey('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');
const global = 'mongodb+srv://admin:admin@cluster0.t49xt.mongodb.net/say_me';

mongoose.connect(global, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

export async function sendMailOvulation() {
  const users = await User.find();

  const today = new Date().setHours(0o0, 0o0, 0o0, 0o0);
  // eslint-disable-next-line max-len
  const sendList = [];
  users.forEach((user) => {
    user.ovulationDay.forEach((day) => {
      const dayDate = new Date(day);
      if ((dayDate - today) / 1000 < 691200 && (dayDate - today) / 1000 > 518400) {
        sendList.push(user);
      }
    });
  });

  sendList.map(async (user) => {
    let message;

    const messagePos = await Message.create({
      to: `${user.partnerContact}`,
      subject: 'Notification from SAY_ME',
      html: '<strong>Next week the best time to get pregnant. Have fun!</strong>',
    });

    const messageNeg = await Message.create({
      to: `${user.partnerContact}`,
      subject: 'Notification from SAY_ME',
      html: '<strong>Be careful! Next week the highest risk of getting pregnant!</strong>',
    });

    if (user.toGetPregnant) {
      message = messagePos;
    } else {
      message = messageNeg;
    }
    return sgMail
      .send(message)
      .then(() => console.log('Message sent'))
      .catch((err) => console.log(err));
  });
}

export async function sendMailPeriod() {
  const users = await User.find();
  const today = new Date().setHours(0o0, 0o0, 0o0, 0o0);

  const sendList = [];
  users.forEach((user) => {
    if (user.periodStart[0] && user.periodStart[0][0]) {
      const dayDate = new Date(user.periodStart[0][0]);
      const countDay = dayDate.getDate();
      dayDate.setDate(countDay + 21);
      if ((dayDate - today) / 1000 < 86400 && (dayDate - today) / 1000 >= 0) {
        sendList.push(user);
      }
    }
  });
  if (sendList.length > 0) {
    sendList.map(async (user) => {
      const message = await Message.create({
        to: `${user.partnerContact}`,
        subject: 'Notification from SAY_ME',
        html: '<strong>Be gentle with your lady. Next week she may have mood swings.</strong>',
      });

      return sgMail
        .send(message)
        .then(() => console.log('Message sent'))
        .catch((err) => console.log(err));
    });
  }
}
// sendMailPeriod().then((res) => console.log(res));
