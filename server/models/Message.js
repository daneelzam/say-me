import mongoose from 'mongoose';

const Message = mongoose.model('Message', {
  to: String,
  from: { type: String, default: 'saymedear4@gmail.com' },
  subject: String,
  text: { type: String, default: 'random' },
  html: String,
});

export default Message;
