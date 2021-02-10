import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  partnerContact: String,
  periodStart: [String],
  ovulationDay: [String],
  toGetPregnant: Boolean,
});

const User = mongoose.model('User', userSchema);

export default User;
