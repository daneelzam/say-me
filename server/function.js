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
});

async function sendMail() {
  let users = await User.find();

  const today = new Date();

  users = users.filter((el) => ((el.ovulationDay - today) / 1000 === 604800 ? el : null));

  users.map(async (user) => {
    let message;

    const messagePos = await Message.create({
      to: `${user.partnerContact.toString()}`,
      subject: 'Notification from SAY_ME',
      html: '<strong>DO FUCK!</strong>',
    });

    const messageNeg = await Message.create({
      to: `${user.partnerContact.toString()}`,
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

// return sgMail.send(message);
sendMail().then((res) => console.log(res));
