import mongoose, { ConnectOptions } from 'mongoose';

import AccountModel from './accountModel';

const uri = 'mongodb://admin:password@localhost:27017/';

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

export const postService: any = async (account: any) => {
  const userToAdd = new AccountModel(account);

  return await userToAdd.save()
    .then(savedUser => {
      return savedUser;
    })
    .catch(err => {
      console.error('Error saving user:', err);
      throw err;
    });
};