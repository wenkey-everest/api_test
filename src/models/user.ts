import mongoose, { Document, model, Schema } from "mongoose";
//Create a interface representing document in DB
interface IUser {
  name: String;
  age: Number;
  email: String;
}
//add build method to the IUser interface
interface UserModelInterface extends mongoose.Model<UserDoc> {
  build(attr: IUser): UserDoc;
}

//To check build is giving Exact user document or not
interface UserDoc extends Document {
  name: String;
  age: Number;
  email: String;
}

//Create a mongodb schema corresponding to the document
const schema = new Schema<IUser>({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

schema.statics.build = (attr: IUser) => {
  return new User(attr);
};
// 3. Create a Model.
const User = model<IUser, UserModelInterface>("User", schema);

export { User };
