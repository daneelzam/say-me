import mongoose from 'mongoose';

const advicesSchema = new mongoose.Schema({
  name: Number,
  text: String,
});

const Advices = mongoose.model('Advices', advicesSchema);

export default Advices;
