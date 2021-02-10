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
  let users = await User.find();
  const today = new Date().setHours(0o0, 0o0, 0o0, 0o0);

  // eslint-disable-next-line max-len
  users = users.filter((el) => ((el.ovulationDay - today / 1000 <= 691200 ? el : null)));

  users.map(async (user) => {
    let message;

    const messagePos = await Message.create({
      to: `${user.partnerContact}`,
      subject: 'Notification from SAY_ME',
      html: '<strong>DO FUCK!</strong>',
    });

    const messageNeg = await Message.create({
      to: `${user.partnerContact}`,
      subject: 'Notification from SAY_ME',
      html: '<strong>DONT FUCK!</strong>',
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
  let users = await User.find();
  const today = new Date();

  users = users.filter((el) => {
    let result;
    const stdate = new Date(el.periodStart[0][0]);
    const countDate = stdate.getDate();
    stdate.setDate(countDate + 21);
    if (stdate === today) {
      result = el;
    }
    return result;
  });

  console.log(users);

  users.map(async (user) => {
    const message = await Message.create({
      to: `${user.partnerContact}`,
      subject: 'Notification from SAY_ME',
      html: '<strong>Be careful with your bitch she is sick as fuck</strong>',
    });

    return sgMail
      .send(message)
      .then(() => console.log('Message sent'))
      .catch((err) => console.log(err));
  });
}
sendMailPeriod().then((res) => console.log(res));
