import mongoose, { ConnectOptions } from 'mongoose';

const uri = 'mongodb://admin:password@localhost:27017/';

const dbConnection = () => {
  mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions)
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((err) => {
      console.log('Failed to Connect to MongoDB', err);
    });
};

export default dbConnection;
