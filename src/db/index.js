import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );
    console.log(
      `\n MongoDB connected !! DB HOST : ${connectionInstance.connection.host}` //it is saying to which place you are connecting to
    );
  } catch (error) {
    console.log("MONGODB connection error ", error);
    process.exit(1);
    //process is going to stop
  }
};

export default connectDB;
