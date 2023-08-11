import mongoose, { Schema, Document } from 'mongoose';

interface IAccount extends Document {
  Email: string;
  Password: string;
  Phone: string;
}

const accountModel: Schema = new Schema({
  Email: {
    type: String,
    required: true,
    unique: true,
  },
  Password: {
    type: String,
    required: true,
  },
  Phone: {
    type: String,
    required: true,
  },
});

const AccountModel = mongoose.model<IAccount>('Account', accountModel);

export default AccountModel;
