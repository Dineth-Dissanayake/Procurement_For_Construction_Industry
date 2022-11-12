import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: [true, "Required⚠️"],
  },
  email: {
    type: String,
    required: [true, "email Required⚠️"],
  },
  password: {
    type: String,
    required: [true, "Required⚠️"],
  }
});


module.exports = mongoose.model("User", UserSchema);