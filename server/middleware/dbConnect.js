import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// const global = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.t49xt.mongodb.net/${process.env.DB_NAME}`;
const local = 'mongodb://3.22.250.188:27017/tellme';
const dbConnect = () => {
  mongoose.connect(local, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });
};

export default dbConnect;
