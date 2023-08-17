import mongoose, { Schema, Document } from 'mongoose';
import * as bcrypt from 'bcrypt';

interface IAccount extends Document {
  email: string;
  password: string;
}

const accountModel: Schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (value: string) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(value);
      },
      message: 'Invalid email format',
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 6, // Minimum password length
  },
});

// Hash the password before saving it to the database
accountModel.pre<IAccount>(['save'], async function (next) {
  if (this.isModified('password')) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
  }
  next();
});

const AccountModel = mongoose.model<IAccount>('Account', accountModel);

export default AccountModel;
