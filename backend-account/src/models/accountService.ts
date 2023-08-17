import * as bcrypt from 'bcrypt';

import AccountModel from './accountModel';

interface Account {
  email: string;
  password: string;
}

export const postService = async (account: Account) => {
  const userToAdd = new AccountModel(account);

  return await userToAdd
    .save()
    .then((savedUser) => {
      return savedUser;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

export const getService = async () => {
  return AccountModel.find()
    .then((accounts) => accounts)
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

export const getIdService = async (id: string) => {
  return AccountModel.findById(id)
    .then((account) => account)
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

export const deleteService = async (id: string) => {
  return AccountModel.findByIdAndDelete(id)
    .then((result) => result)
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

export const putService = async (id: string, account: Account) => {
  const salt = await bcrypt.genSalt(10);
  account.password = await bcrypt.hash(account.password, salt);
  return AccountModel.findByIdAndUpdate(id, account)
    .then((result) => result)
    .catch((err) => {
      console.log(err);
      throw err;
    });
};
