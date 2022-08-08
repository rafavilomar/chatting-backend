import mongoose from "mongoose";
import envConfig from "./envConfig";

const MongoConnection = async () => {
  try {
    const connection = await mongoose.connect(envConfig.db.host);
    // eslint-disable-next-line no-console
    console.info("Connected to MongoDB");
    return connection;
  } catch (error) {
    throw new Error("Error connecting to MongoDB");
  }
};

export default MongoConnection;
