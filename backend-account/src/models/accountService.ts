import AccountModel from './accountModel';

interface Account {
  Email: string;
  Password: string;
  Phone: string;
}

export const postService = async (account: Account) => {
  const userToAdd = new AccountModel(account);

  return await userToAdd
    .save()
    .then((savedUser) => {
      return savedUser;
    })
    .catch((err) => {
      throw err;
    });
};
